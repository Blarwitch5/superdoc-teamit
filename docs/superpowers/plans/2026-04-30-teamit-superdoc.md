# teamit-superdoc Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an internal process documentation site (Astro 5 + Starlight) with a Keystatic CMS admin, email/password auth, and automatic author tracking — deployed as a single Node.js service on Infomaniak.

**Architecture:** Astro runs in SSR mode with `@astrojs/node`. Better Auth handles email/password sessions stored in SQLite. Keystatic provides the admin UI at `/keystatic`; its API handler is wrapped to inject the logged-in user's name and date into `createdBy`/`modifiedBy` fields before writing each markdown file. All routes except `/login` are protected by Astro middleware.

**Tech Stack:** Astro 5, `@astrojs/starlight`, Tailwind CSS v4 (`@tailwindcss/vite`), `@keystatic/core` + `@keystatic/astro`, Better Auth, Drizzle ORM, `better-sqlite3`, `@astrojs/node`, `@lucide/astro`, PM2, Nginx

---

## File map

| File | Responsibility |
|---|---|
| `astro.config.ts` | Astro + Starlight + Keystatic + Tailwind config |
| `keystatic.config.ts` | Keystatic fiches collection schema |
| `src/middleware.ts` | Session-based route protection |
| `src/lib/auth.ts` | Better Auth instance |
| `src/lib/db.ts` | Drizzle + SQLite connection |
| `src/env.d.ts` | Type augmentation for `Astro.locals` |
| `src/pages/login.astro` | Login form (POST handler + HTML) |
| `src/pages/logout.astro` | Sign-out redirect |
| `src/pages/api/auth/[...all].ts` | Better Auth HTTP handler |
| `src/pages/api/keystatic/[...params].ts` | Keystatic handler + author injection |
| `src/components/FicheFooter.astro` | Author/date footer on each fiche |
| `src/components/VideoEmbed.astro` | YouTube/Vimeo responsive embed |
| `src/components/HeaderNav.astro` | Starlight SocialIcons override with logout link |
| `src/content/config.ts` | Starlight schema extension for custom frontmatter |
| `src/styles/global.css` | Tailwind v4 import + Starlight CSS brand tokens |
| `src/content/docs/{category}/index.md` | Five category index pages |
| `src/assets/logo-light.svg` | Logo placeholder (replaced by client asset) |
| `src/assets/logo-dark.svg` | Logo placeholder dark variant |
| `scripts/create-user.ts` | CLI: create employee accounts |
| `ecosystem.config.cjs` | PM2 process config |
| `docs/nginx.conf` | Nginx virtual host template |
| `docs/DEPLOIEMENT.md` | Deployment runbook |

---

## Task 1: Initialize project

**Files:**
- Create: `package.json`, `astro.config.ts`, `tsconfig.json`, project scaffold

- [ ] **Step 1.1: Scaffold Astro + Starlight**

```bash
cd /Users/blarwitch/Sites/teamit
pnpm create astro@latest teamit-superdoc -- --template starlight --no-install --typescript strict
cd teamit-superdoc
```

- [ ] **Step 1.2: Install dependencies**

```bash
pnpm install
pnpm add @astrojs/node @tailwindcss/vite @keystatic/core @keystatic/astro \
  better-auth drizzle-orm better-sqlite3 @lucide/astro
pnpm add -D drizzle-kit @types/better-sqlite3 tsx
```

- [ ] **Step 1.3: Verify dev server starts**

```bash
pnpm dev
```

Expected: Starlight default site at `http://localhost:4321`, no errors.

- [ ] **Step 1.4: Commit**

```bash
git add .
git commit -m "feat: initialize Astro Starlight project"
```

---

## Task 2: Configure Astro (SSR + Tailwind v4 + Starlight + Keystatic)

**Files:**
- Modify: `astro.config.ts`
- Create: `src/styles/global.css`
- Create: `src/assets/logo-light.svg`, `src/assets/logo-dark.svg`
- Create: `keystatic.config.ts` (skeleton)

- [ ] **Step 2.1: Write `astro.config.ts`**

```ts
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite'
import keystatic from '@keystatic/astro'

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    starlight({
      title: 'Documentation Team IT',
      logo: {
        light: './src/assets/logo-light.svg',
        dark:  './src/assets/logo-dark.svg',
        replacesTitle: true
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'Français', lang: 'fr' }
      },
      customCss: ['./src/styles/global.css'],
      components: {
        Footer:      './src/components/FicheFooter.astro',
        SocialIcons: './src/components/HeaderNav.astro',
      },
      sidebar: [
        { label: 'Web',           autogenerate: { directory: 'web' } },
        { label: 'Administratif', autogenerate: { directory: 'administratif' } },
        { label: 'Installation',  autogenerate: { directory: 'installation' } },
        { label: 'Email',         autogenerate: { directory: 'email' } },
        { label: 'Serveur',       autogenerate: { directory: 'serveur' } },
      ],
    }),
    keystatic()
  ]
})
```

- [ ] **Step 2.2: Create `src/styles/global.css`**

```css
@import "tailwindcss";

/* Starlight brand tokens — valeurs provisoires, à remplacer après réception du logo client */
:root {
  --sl-color-accent-low:  #e8f0fe;
  --sl-color-accent:      #1a56db;
  --sl-color-accent-high: #1e429f;
}

:root[data-theme='dark'] {
  --sl-color-accent-low:  #1e3a8a;
  --sl-color-accent:      #3b82f6;
  --sl-color-accent-high: #93c5fd;
}
```

- [ ] **Step 2.3: Create placeholder SVG logos**

```bash
mkdir -p src/assets

cat > src/assets/logo-light.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 32">
  <text x="0" y="24" font-family="sans-serif" font-size="20" font-weight="bold" fill="#1a56db">Team IT</text>
</svg>
EOF

cat > src/assets/logo-dark.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 32">
  <text x="0" y="24" font-family="sans-serif" font-size="20" font-weight="bold" fill="#93c5fd">Team IT</text>
</svg>
EOF
```

- [ ] **Step 2.4: Create skeleton `keystatic.config.ts`**

```ts
import { config } from '@keystatic/core'

export default config({
  storage: { kind: 'local' },
  collections: {}
})
```

- [ ] **Step 2.5: Verify dev server starts**

```bash
pnpm dev
```

Expected: site at `http://localhost:4321`, `/keystatic` accessible (empty).

- [ ] **Step 2.6: Commit**

```bash
git add .
git commit -m "feat: configure SSR, Tailwind v4, Starlight, Keystatic skeleton"
```

---

## Task 3: Setup Better Auth + SQLite

**Files:**
- Create: `src/lib/db.ts`
- Create: `src/lib/auth.ts`
- Create: `src/env.d.ts`
- Create: `.env`

- [ ] **Step 3.1: Write `src/lib/db.ts`**

```ts
import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'

const sqlite = new Database('./auth.db')
export const db = drizzle(sqlite)
```

- [ ] **Step 3.2: Write `src/lib/auth.ts`**

```ts
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from './db'

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: 'sqlite' }),
  emailAndPassword: { enabled: true },
  secret:  import.meta.env.AUTH_SECRET,
  baseURL: import.meta.env.SITE_URL ?? 'http://localhost:4321',
})
```

- [ ] **Step 3.3: Write `src/env.d.ts`**

```ts
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type SessionUser = {
  id: string
  name: string
  email: string
}

type UserSession = {
  id: string
  userId: string
  expiresAt: Date
}

declare namespace App {
  interface Locals {
    user: SessionUser | null
    session: UserSession | null
  }
}
```

- [ ] **Step 3.4: Create `.env`**

Generate a secret first:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Then create `.env` (replace `<output>` with the generated value):

```bash
cat > .env << 'EOF'
AUTH_SECRET=<output>
SITE_URL=http://localhost:4321
EOF
```

Also create `.env.example` for documentation:

```bash
cat > .env.example << 'EOF'
AUTH_SECRET=generate-with-node-crypto-randomBytes-32-hex
SITE_URL=https://doc.team-it.ch
EOF
```

- [ ] **Step 3.5: Run Better Auth migrations**

```bash
npx better-auth migrate
```

Expected: `auth.db` created with tables `user`, `session`, `account`, `verification`.

Verify:

```bash
node -e "
const Database = require('better-sqlite3')
const db = new Database('./auth.db')
console.log(db.prepare(\"SELECT name FROM sqlite_master WHERE type='table'\").all())
"
```

Expected output: `[ { name: 'user' }, { name: 'session' }, ... ]`

- [ ] **Step 3.6: Commit**

```bash
git add src/lib/ src/env.d.ts .env.example
git commit -m "feat: Better Auth with SQLite via Drizzle"
```

---

## Task 4: Auth API endpoint + middleware

**Files:**
- Create: `src/pages/api/auth/[...all].ts`
- Create: `src/middleware.ts`

- [ ] **Step 4.1: Create `src/pages/api/auth/[...all].ts`**

```ts
import type { APIRoute } from 'astro'
import { auth } from '../../../lib/auth'

export const ALL: APIRoute = async ({ request }) => {
  return auth.handler(request)
}
```

- [ ] **Step 4.2: Write `src/middleware.ts`**

```ts
import { defineMiddleware } from 'astro:middleware'
import { auth } from './lib/auth'

const PUBLIC_PATHS = ['/login', '/api/auth']

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = new URL(context.request.url).pathname

  if (PUBLIC_PATHS.some(path => pathname.startsWith(path))) {
    context.locals.user = null
    context.locals.session = null
    return next()
  }

  const session = await auth.api.getSession({ headers: context.request.headers })

  if (!session) {
    if (pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'Non autorisé' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }
    return context.redirect('/login')
  }

  context.locals.user = session.user
  context.locals.session = session.session
  return next()
})
```

- [ ] **Step 4.3: Verify middleware redirects unauthenticated requests**

```bash
pnpm dev
```

Open `http://localhost:4321` in a private/incognito window.

Expected: redirected to `/login` (returns 404 since the page doesn't exist yet — correct).

- [ ] **Step 4.4: Commit**

```bash
git add src/pages/api/auth/ src/middleware.ts
git commit -m "feat: auth API route and route protection middleware"
```

---

## Task 5: Login + logout pages

**Files:**
- Create: `src/pages/login.astro`
- Create: `src/pages/logout.astro`

- [ ] **Step 5.1: Write `src/pages/login.astro`**

```astro
---
if (Astro.locals.user) {
  return Astro.redirect('/')
}

let loginError = ''

if (Astro.request.method === 'POST') {
  const formData = await Astro.request.formData()
  const email    = String(formData.get('email') ?? '')
  const password = String(formData.get('password') ?? '')

  const response = await fetch(`${Astro.url.origin}/api/auth/sign-in/email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  if (response.ok) {
    const setCookie = response.headers.get('set-cookie')
    if (setCookie) Astro.response.headers.set('set-cookie', setCookie)
    return Astro.redirect('/')
  } else {
    loginError = 'Email ou mot de passe incorrect.'
  }
}
---

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Connexion — Documentation Team IT</title>
  <link rel="stylesheet" href="/src/styles/global.css" />
</head>
<body class="min-h-screen flex items-center justify-center bg-[var(--sl-color-bg)]">
  <div class="w-full max-w-sm p-8 rounded-xl border border-[var(--sl-color-hairline)] bg-[var(--sl-color-bg-nav)]">
    <h1 class="text-xl font-bold text-[var(--sl-color-text)] mb-6">Documentation Team IT</h1>

    {loginError && (
      <p class="mb-4 text-sm text-red-500">{loginError}</p>
    )}

    <form method="POST" class="flex flex-col gap-4">
      <label class="flex flex-col gap-1 text-sm text-[var(--sl-color-gray-2)]">
        Email
        <input
          type="email"
          name="email"
          required
          autocomplete="email"
          class="rounded border border-[var(--sl-color-hairline)] bg-[var(--sl-color-bg)] px-3 py-2 text-[var(--sl-color-text)]"
        />
      </label>

      <label class="flex flex-col gap-1 text-sm text-[var(--sl-color-gray-2)]">
        Mot de passe
        <input
          type="password"
          name="password"
          required
          autocomplete="current-password"
          class="rounded border border-[var(--sl-color-hairline)] bg-[var(--sl-color-bg)] px-3 py-2 text-[var(--sl-color-text)]"
        />
      </label>

      <button
        type="submit"
        class="mt-2 rounded bg-[var(--sl-color-accent)] px-4 py-2 text-white font-medium hover:bg-[var(--sl-color-accent-high)] transition-colors"
      >
        Se connecter
      </button>
    </form>
  </div>
</body>
</html>
```

- [ ] **Step 5.2: Write `src/pages/logout.astro`**

```astro
---
await fetch(`${Astro.url.origin}/api/auth/sign-out`, {
  method: 'POST',
  headers: Astro.request.headers
})
Astro.response.headers.set(
  'set-cookie',
  'better-auth.session_token=; Max-Age=0; Path=/'
)
return Astro.redirect('/login')
---
```

- [ ] **Step 5.3: Test login page renders**

```bash
pnpm dev
```

Open `http://localhost:4321/login`. Expected: login form visible. Submitting with wrong credentials shows the error message.

- [ ] **Step 5.4: Commit**

```bash
git add src/pages/login.astro src/pages/logout.astro
git commit -m "feat: login and logout pages"
```

---

## Task 6: Create-user CLI script

**Files:**
- Create: `scripts/create-user.ts`
- Modify: `package.json`

- [ ] **Step 6.1: Write `scripts/create-user.ts`**

```ts
import { auth } from '../src/lib/auth'

const [,, name, email, password] = process.argv

if (!name || !email || !password) {
  console.error('Usage: pnpm create-user "Prénom Nom" email@example.com motdepasse')
  process.exit(1)
}

if (password.length < 8) {
  console.error('Le mot de passe doit contenir au moins 8 caractères.')
  process.exit(1)
}

try {
  await auth.api.signUpEmail({ body: { name, email, password } })
  console.log(`Utilisateur créé : ${name} (${email})`)
} catch (error) {
  console.error('Erreur :', error instanceof Error ? error.message : String(error))
  process.exit(1)
}
```

- [ ] **Step 6.2: Add script to `package.json`**

In `package.json`, add to `"scripts"`:

```json
"create-user": "tsx scripts/create-user.ts"
```

- [ ] **Step 6.3: Create a test account**

```bash
pnpm create-user "Admin Test" admin@team-it.ch motdepasse123
```

Expected: `Utilisateur créé : Admin Test (admin@team-it.ch)`

- [ ] **Step 6.4: Test login end-to-end**

```bash
pnpm dev
```

Go to `http://localhost:4321/login`, enter `admin@team-it.ch` / `motdepasse123`.

Expected: redirected to `http://localhost:4321/` (Starlight home).

- [ ] **Step 6.5: Commit**

```bash
git add scripts/create-user.ts package.json
git commit -m "feat: CLI script to create employee accounts"
```

---

## Task 7: Keystatic fiches schema

**Files:**
- Modify: `keystatic.config.ts` (full schema)

- [ ] **Step 7.1: Write full `keystatic.config.ts`**

```ts
import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Team IT Docs' } },
  collections: {
    fiches: collection({
      label: 'Fiches de process',
      slugField: 'title',
      path: 'src/content/docs/*/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titre' } }),
        description: fields.text({
          label: 'Description',
          description: 'Résumé court affiché dans la sidebar.'
        }),
        category: fields.select({
          label: 'Catégorie',
          options: [
            { label: 'Web',           value: 'web' },
            { label: 'Administratif', value: 'administratif' },
            { label: 'Installation',  value: 'installation' },
            { label: 'Email',         value: 'email' },
            { label: 'Serveur',       value: 'serveur' },
          ],
          defaultValue: 'web'
        }),
        subcategory: fields.text({
          label: 'Sous-catégorie',
          description: 'Ex : Déploiement, Configuration, Sauvegarde…'
        }),
        image: fields.image({
          label: 'Image principale (optionnel)',
          directory: 'src/assets/docs',
          publicPath: '../../assets/docs/'
        }),
        videoUrl: fields.url({
          label: 'URL vidéo (optionnel)',
          description: 'YouTube non-listé, Vimeo, Microsoft Stream…'
        }),
        createdBy:  fields.text({ label: 'Créé par',      validation: { isRequired: false } }),
        createdAt:  fields.text({ label: 'Créé le',       validation: { isRequired: false } }),
        modifiedBy: fields.text({ label: 'Modifié par',   validation: { isRequired: false } }),
        modifiedAt: fields.text({ label: 'Modifié le',    validation: { isRequired: false } }),
        content: fields.markdoc({ label: 'Contenu' })
      }
    })
  }
})
```

- [ ] **Step 7.2: Verify schema in admin**

```bash
pnpm dev
```

Log in, then go to `http://localhost:4321/keystatic`. Expected: "Fiches de process" collection visible with all fields.

- [ ] **Step 7.3: Commit**

```bash
git add keystatic.config.ts
git commit -m "feat: Keystatic fiches schema with all fields"
```

---

## Task 8: Keystatic API route with author injection

**Files:**
- Create: `src/pages/api/keystatic/[...params].ts`

- [ ] **Step 8.1: Create `src/pages/api/keystatic/[...params].ts`**

```ts
import { makeRouteHandler } from '@keystatic/astro/api'
import type { APIRoute } from 'astro'
import { auth } from '../../../lib/auth'
import config from '../../../../keystatic.config'

const keystatic = makeRouteHandler({ config })

function todayISO(): string {
  return new Date().toISOString().split('T')[0]
}

export const ALL: APIRoute = async (context) => {
  const { request } = context

  if (
    (request.method === 'POST' || request.method === 'PUT') &&
    (request.headers.get('content-type') ?? '').includes('application/json')
  ) {
    const session = await auth.api.getSession({ headers: request.headers })

    if (session?.user) {
      try {
        const body = await request.clone().json()
        const userName = session.user.name
        const today    = todayISO()

        // Keystatic sends the entry fields at body.entry or body directly depending on version
        const entry = body?.entry ?? body

        if (entry && typeof entry === 'object') {
          if (!entry.createdBy) {
            entry.createdBy = userName
            entry.createdAt = today
          }
          entry.modifiedBy = userName
          entry.modifiedAt = today

          if (body?.entry) body.entry = entry

          return keystatic({
            ...context,
            request: new Request(request.url, {
              method:  request.method,
              headers: request.headers,
              body:    JSON.stringify(body?.entry ? body : entry)
            })
          })
        }
      } catch {
        // Body parsing failed — fall through to normal handler
      }
    }
  }

  return keystatic(context)
}
```

- [ ] **Step 8.2: Verify `makeRouteHandler` export name**

After installing, run:

```bash
node -e "console.log(Object.keys(require('@keystatic/astro/api')))"
```

If `makeRouteHandler` is not listed, use the actual export name shown in the output (may be `createAPIRouteHandler` or `makeHandler`). Update the import in `[...params].ts` accordingly.

- [ ] **Step 8.3: Create a test fiche and verify author injection**

1. Go to `http://localhost:4321/keystatic` → "Fiches de process" → "+"
2. Fill: Title = "Test process", Category = Web, Subcategory = Test, Description = "Test", Content = "Contenu test"
3. Click "Save"

```bash
find src/content/docs -name "*.md" | head -5 | xargs cat
```

Expected: `createdBy: Admin Test`, `createdAt: 2026-04-30` in frontmatter.

- [ ] **Step 8.4: Debug if author fields are empty**

If `createdBy` is empty, add this temporarily before the `try` block to inspect the actual body format:

```ts
const debugBody = await request.clone().text()
console.log('[Keystatic body]', debugBody)
```

Adjust the `body?.entry ?? body` path to match the logged structure, then remove the debug line.

- [ ] **Step 8.5: Commit**

```bash
git add src/pages/api/keystatic/
git commit -m "feat: Keystatic API route with session-based author injection"
```

---

## Task 9: Content schema extension + category index pages

**Files:**
- Create: `src/content/config.ts`
- Create: `src/content/docs/{web,administratif,installation,email,serveur}/index.md`

- [ ] **Step 9.1: Write `src/content/config.ts`**

```ts
import { defineCollection, z } from 'astro:content'
import { docsSchema } from '@astrojs/starlight/schema'

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        category:   z.string().optional(),
        subcategory: z.string().optional(),
        videoUrl:   z.string().url().optional().or(z.literal('')),
        createdBy:  z.string().optional(),
        createdAt:  z.string().optional(),
        modifiedBy: z.string().optional(),
        modifiedAt: z.string().optional(),
      })
    })
  })
}
```

- [ ] **Step 9.2: Create `src/content/docs/web/index.md`**

```markdown
---
title: Web
description: Process liés au développement et à la gestion web.
---

Bienvenue dans la section Web. Naviguez via la sidebar pour accéder aux fiches de process.
```

- [ ] **Step 9.3: Create `src/content/docs/administratif/index.md`**

```markdown
---
title: Administratif
description: Process administratifs internes.
---

Bienvenue dans la section Administratif.
```

- [ ] **Step 9.4: Create `src/content/docs/installation/index.md`**

```markdown
---
title: Installation
description: Process d'installation de matériel et logiciels.
---

Bienvenue dans la section Installation.
```

- [ ] **Step 9.5: Create `src/content/docs/email/index.md`**

```markdown
---
title: Email
description: Configuration et gestion des services email.
---

Bienvenue dans la section Email.
```

- [ ] **Step 9.6: Create `src/content/docs/serveur/index.md`**

```markdown
---
title: Serveur
description: Administration et maintenance des serveurs.
---

Bienvenue dans la section Serveur.
```

- [ ] **Step 9.7: Verify sidebar in browser**

```bash
pnpm dev
```

Expected: sidebar shows 5 sections. Each section is clickable and shows its index page.

- [ ] **Step 9.8: Commit**

```bash
git add src/content/
git commit -m "feat: content schema extension and category index pages"
```

---

## Task 10: FicheFooter component

**Files:**
- Create: `src/components/FicheFooter.astro`

- [ ] **Step 10.1: Write `src/components/FicheFooter.astro`**

```astro
---
import type { Props } from '@astrojs/starlight/props'

const { entry } = Astro.props as Props

type FicheData = {
  createdBy?:  string
  createdAt?:  string
  modifiedBy?: string
  modifiedAt?: string
}

const data = entry?.data as FicheData | undefined

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('fr-CH', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}

const hasMetadata = data?.createdBy || data?.modifiedBy
const wasModified = data?.modifiedAt && data.modifiedAt !== data?.createdAt
---

{hasMetadata && (
  <footer class="mt-12 border-t border-[var(--sl-color-hairline)] pt-6 text-sm text-[var(--sl-color-gray-3)]">
    {data?.createdBy && (
      <p>
        Créé par <strong class="text-[var(--sl-color-text)]">{data.createdBy}</strong>
        {data.createdAt && <> le {formatDate(data.createdAt)}</>}
      </p>
    )}
    {data?.modifiedBy && wasModified && (
      <p>
        Dernière modification par <strong class="text-[var(--sl-color-text)]">{data.modifiedBy}</strong>
        {data.modifiedAt && <> le {formatDate(data.modifiedAt)}</>}
      </p>
    )}
  </footer>
)}
```

- [ ] **Step 10.2: Verify footer on a fiche**

```bash
pnpm dev
```

Open the test fiche created in Task 8.

Expected: footer at the bottom shows "Créé par Admin Test le 30 avril 2026".

- [ ] **Step 10.3: Commit**

```bash
git add src/components/FicheFooter.astro
git commit -m "feat: FicheFooter with automatic author and date display"
```

---

## Task 11: VideoEmbed component

**Files:**
- Create: `src/components/VideoEmbed.astro`

- [ ] **Step 11.1: Write `src/components/VideoEmbed.astro`**

```astro
---
interface Props {
  url: string
}

const { url } = Astro.props

function getEmbedUrl(rawUrl: string): string | null {
  try {
    const parsed = new URL(rawUrl)

    if (parsed.hostname.includes('youtube.com')) {
      const videoId = parsed.searchParams.get('v')
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }
    if (parsed.hostname.includes('youtu.be')) {
      const videoId = parsed.pathname.slice(1)
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }
    if (parsed.hostname.includes('vimeo.com')) {
      const videoId = parsed.pathname.split('/').filter(Boolean).pop()
      return videoId ? `https://player.vimeo.com/video/${videoId}` : null
    }

    return null
  } catch {
    return null
  }
}

const embedUrl = getEmbedUrl(url)
---

{embedUrl ? (
  <div class="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg mt-4">
    <iframe
      src={embedUrl}
      class="absolute top-0 left-0 w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title="Vidéo de documentation"
      aria-label="Lecteur vidéo intégré"
    />
  </div>
) : (
  <a href={url} target="_blank" rel="noopener noreferrer" class="text-[var(--sl-color-accent)]">
    Voir la vidéo
  </a>
)}
```

Editors use `<VideoEmbed url="https://youtube.com/watch?v=..." />` in their MDX content. To enable MDX in fiche content, change `fields.markdoc` to `fields.mdx` in `keystatic.config.ts` if needed.

- [ ] **Step 11.2: Commit**

```bash
git add src/components/VideoEmbed.astro
git commit -m "feat: VideoEmbed component for YouTube/Vimeo responsive embeds"
```

---

## Task 12: Logout link in header

**Files:**
- Create: `src/components/HeaderNav.astro`

- [ ] **Step 12.1: Write `src/components/HeaderNav.astro`**

```astro
---
import Default from '@astrojs/starlight/components/SocialIcons.astro'
import type { Props } from '@astrojs/starlight/props'
---

<Default {...Astro.props}><slot /></Default>
<a
  href="/logout"
  class="text-sm text-[var(--sl-color-gray-2)] hover:text-[var(--sl-color-accent)] transition-colors"
  aria-label="Se déconnecter"
>
  Déconnexion
</a>
```

- [ ] **Step 12.2: Verify logout link appears in header**

```bash
pnpm dev
```

Expected: "Déconnexion" link visible in the Starlight header top-right area.

Click it → redirected to `/login`.

- [ ] **Step 12.3: Commit**

```bash
git add src/components/HeaderNav.astro
git commit -m "feat: logout link in Starlight header via SocialIcons override"
```

---

## Task 13: Production build + deployment config

**Files:**
- Create: `ecosystem.config.cjs`
- Create: `docs/nginx.conf`
- Create: `docs/DEPLOIEMENT.md`

- [ ] **Step 13.1: Create `ecosystem.config.cjs`**

```js
module.exports = {
  apps: [{
    name: 'teamit-superdoc',
    script: './dist/server/entry.mjs',
    env: {
      NODE_ENV: 'production',
      PORT: 4321,
      HOST: '127.0.0.1'
    }
  }]
}
```

- [ ] **Step 13.2: Create `docs/nginx.conf`**

```nginx
server {
    listen 80;
    server_name doc.team-it.ch;

    # Remplacer par le CIDR réel du réseau interne
    allow 192.168.1.0/24;
    deny all;

    location / {
        proxy_pass         http://127.0.0.1:4321;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

- [ ] **Step 13.3: Create `docs/DEPLOIEMENT.md`**

```markdown
# Déploiement sur Infomaniak

## Prérequis

- Node.js 20+ installé
- pnpm installé (`npm install -g pnpm`)
- PM2 installé (`npm install -g pm2`)
- Nginx configuré

## Première installation

\`\`\`bash
git clone <repo-url> /var/www/teamit-superdoc
cd /var/www/teamit-superdoc
pnpm install
cp .env.example .env
# Éditer .env avec les vraies valeurs (AUTH_SECRET et SITE_URL)
pnpm build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup  # pour démarrage automatique au reboot
\`\`\`

## Nginx

\`\`\`bash
cp docs/nginx.conf /etc/nginx/sites-available/teamit-superdoc
# Éditer le fichier : remplacer 192.168.1.0/24 par le vrai CIDR
ln -s /etc/nginx/sites-available/teamit-superdoc /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
\`\`\`

## Créer un compte utilisateur

\`\`\`bash
cd /var/www/teamit-superdoc
pnpm create-user "Prénom Nom" email@team-it.ch motdepasse
\`\`\`

## Mettre à jour le site

\`\`\`bash
cd /var/www/teamit-superdoc
git pull
pnpm install
pnpm build
pm2 restart teamit-superdoc
\`\`\`
```

- [ ] **Step 13.4: Test production build**

```bash
pnpm build
node dist/server/entry.mjs &
curl -s -o /dev/null -w "%{http_code}" http://localhost:4321/login
```

Expected: `200`

```bash
kill %1
```

- [ ] **Step 13.5: Commit**

```bash
git add ecosystem.config.cjs docs/
git commit -m "feat: PM2, Nginx config and deployment runbook"
```

---

## Self-review

### Spec coverage

| Requirement | Task |
|---|---|
| Astro 5 + Starlight | Task 1 |
| Tailwind CSS v4 | Task 2 |
| SSR via `@astrojs/node` | Task 2 |
| IP whitelist Nginx | Task 13 |
| Sessions — toutes routes protégées sauf `/login` | Task 4 |
| Better Auth + SQLite | Task 3 |
| Comptes via CLI | Task 6 |
| Login / logout pages | Task 5, 12 |
| Keystatic admin `/keystatic` | Task 7 |
| Champs fiches (title, category, subcategory, description, image, videoUrl) | Task 7 |
| Auteur + dates injectés automatiquement | Task 8 |
| Debug de l'injection si format body inattendu | Task 8.4 |
| Schema Starlight étendu pour champs custom | Task 9 |
| Pages index par catégorie | Task 9 |
| Sidebar autogénérée | Task 2 (config) |
| FicheFooter — auteur + dates affichés | Task 10 |
| VideoEmbed — YouTube / Vimeo | Task 11 |
| Logo SVG placeholder | Task 2 |
| Tokens CSS brand couleurs | Task 2 |
| PM2 + Nginx + runbook | Task 13 |

### Notes d'implémentation

- **Export Keystatic** (Task 8.2) : vérifier le nom exact de l'export de `@keystatic/astro/api` après installation — peut être `makeRouteHandler`, `createAPIRouteHandler` ou `makeHandler` selon la version.
- **Format body Keystatic** (Task 8.4) : si l'injection d'auteur échoue, le step de debug documente comment inspecter le format réel et corriger le chemin `body?.entry ?? body`.
- **VideoEmbed dans Markdoc vs MDX** (Task 11) : Keystatic `fields.markdoc` ne supporte pas les composants React/Astro natifs. Si `<VideoEmbed>` doit être utilisé dans le contenu, passer le champ à `fields.mdx` dans `keystatic.config.ts`.

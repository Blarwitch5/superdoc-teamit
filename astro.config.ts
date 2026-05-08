import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import node from '@astrojs/node'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import { mkdirSync, writeFileSync, readdirSync, statSync, readFileSync } from 'node:fs'
import { join, basename } from 'node:path'

// French labels for known categories; unknown ones are auto-capitalised
const CATEGORY_LABELS: Record<string, string> = {
  web:           'Web',
  administratif: 'Administratif',
  installation:  'Installation',
  email:         'Email',
  serveur:       'Serveur',
}

function parseFrontmatter(fileContent: string): Record<string, string> {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(fileContent)
  if (!match) return {}
  const frontmatter: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    const rawValue = line.slice(colonIdx + 1).trim()
    frontmatter[key] = rawValue.replace(/^['"]|['"]$/g, '')
  }
  return frontmatter
}

function buildSidebar() {
  const docsPath = join(process.cwd(), 'src/content/docs')
  try {
    return readdirSync(docsPath)
      .filter(name => {
        try { return statSync(join(docsPath, name)).isDirectory() && !name.startsWith('.') }
        catch { return false }
      })
      .sort()
      .map(categoryDir => {
        const categoryPath = join(docsPath, categoryDir)
        const categoryLabel = CATEGORY_LABELS[categoryDir] ?? categoryDir.charAt(0).toUpperCase() + categoryDir.slice(1)

        let files: string[]
        try {
          files = readdirSync(categoryPath).filter(f => /\.(mdx|mdoc|md)$/.test(f)).sort()
        } catch {
          return { label: categoryLabel, autogenerate: { directory: categoryDir } }
        }

        if (files.length === 0) {
          return { label: categoryLabel, autogenerate: { directory: categoryDir } }
        }

        const fileData = files.map(file => {
          const slug = basename(file).replace(/\.(mdx|mdoc|md)$/, '')
          try {
            const fm = parseFrontmatter(readFileSync(join(categoryPath, file), 'utf-8'))
            return { slug, title: fm.title || slug, subcategory: fm.subcategory || '' }
          } catch {
            return { slug, title: slug, subcategory: '' }
          }
        })

        if (!fileData.some(f => f.subcategory)) {
          return { label: categoryLabel, autogenerate: { directory: categoryDir } }
        }

        // Files without subcategory appear at the top of the category group
        const ungrouped = fileData.filter(f => !f.subcategory)
        const grouped: Record<string, typeof fileData> = {}
        for (const file of fileData.filter(f => f.subcategory)) {
          if (!grouped[file.subcategory]) grouped[file.subcategory] = []
          grouped[file.subcategory].push(file)
        }

        return {
          label: categoryLabel,
          items: [
            ...ungrouped.map(file => ({ label: file.title, link: `/${categoryDir}/${file.slug}/` })),
            ...Object.entries(grouped)
              .sort(([a], [b]) => a.localeCompare(b, 'fr'))
              .map(([sub, subFiles]) => ({
                label: sub,
                collapsed: false,
                items: subFiles.map(file => ({ label: file.title, link: `/${categoryDir}/${file.slug}/` }))
              }))
          ]
        }
      })
  } catch {
    return []
  }
}

/**
 * Custom Keystatic integration that only injects the UI route.
 * The API route (/api/keystatic/[...params]) is handled by our own
 * src/pages/api/keystatic/[...params].ts which adds session-based
 * author injection before forwarding to makeHandler.
 */
function keystaticWithCustomApi() {
  return {
    name: 'keystatic',
    hooks: {
      'astro:config:setup': ({ updateConfig, config }: any) => {
        updateConfig({
          server: config.server.host ? {} : { host: '127.0.0.1' },
          vite: {
            plugins: [{
              name: 'keystatic',
              resolveId(id: string) {
                if (id === 'virtual:keystatic-config') {
                  return this.resolve('./keystatic.config.tsx', './a')
                }
                return null
              }
            }],
            optimizeDeps: {
              entries: ['keystatic.config.*', '.astro/keystatic-imports.js']
            }
          }
        })
        const dotAstroDir = new URL('./.astro/', config.root)
        mkdirSync(dotAstroDir, { recursive: true })
        writeFileSync(
          new URL('keystatic-imports.js', dotAstroDir),
          `import "@keystatic/astro/ui";\nimport "@keystatic/astro/api";\nimport "@keystatic/core/ui";\n`
        )

      }
    }
  }
}

export default defineConfig({
  output: 'server',
  trailingSlash: 'ignore',
  adapter: node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    starlight({
      prerender: false,
      title: 'Documentation Team IT',
      social: [],
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
        Footer:       './src/components/FicheFooter.astro',
        SocialIcons:  './src/components/HeaderNav.astro',
        Sidebar:      './src/components/DynamicSidebar.astro',
        PageSidebar:  './src/components/EditPageSidebar.astro',
      },
      sidebar: buildSidebar(),
    }),
    mdx(),
    keystaticWithCustomApi()
  ]
})

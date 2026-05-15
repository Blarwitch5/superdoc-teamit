import type { APIRoute } from 'astro'
import { mkdirSync, writeFileSync, readdirSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { DOCS_PATH, readOrder, writeOrder } from '../../../lib/content'

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } })

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const POST: APIRoute = async ({ request }) => {
  let body: { name?: string; description?: string }
  try { body = await request.json() }
  catch { return json({ error: 'Corps JSON invalide.' }, 400) }

  const rawName = (body.name ?? '').trim()
  if (!rawName) return json({ error: 'Le nom est requis.' }, 400)

  const dir = slugify(rawName)
  if (!dir) return json({ error: 'Nom de catégorie invalide.' }, 400)

  const categoryPath = join(DOCS_PATH, dir)

  // Guard against path traversal (slugify already strips slashes, but be explicit)
  if (!categoryPath.startsWith(DOCS_PATH)) {
    return json({ error: 'Chemin non autorisé.' }, 403)
  }

  try {
    statSync(categoryPath)
    return json({ error: `La catégorie « ${dir} » existe déjà.` }, 409)
  } catch {
    // does not exist — proceed
  }

  const label = rawName.charAt(0).toUpperCase() + rawName.slice(1)
  const description = (body.description ?? '').trim() || `Fiches de process liées à ${label.toLowerCase()}.`

  try {
    mkdirSync(categoryPath, { recursive: true })
    writeFileSync(
      join(categoryPath, 'index.mdx'),
      `---\ntitle: ${label}\ndescription: ${description}\ncategory: ${dir}\n---\n\n${description}\n`
    )
    const order = readOrder()
    if (!order.categories.includes(dir)) order.categories.push(dir)
    writeOrder(order)
    return json({ ok: true, dir, label })
  } catch {
    return json({ error: 'Erreur lors de la création.' }, 500)
  }
}

export const DELETE: APIRoute = async ({ request }) => {
  let body: { name?: string }
  try { body = await request.json() }
  catch { return json({ error: 'Corps JSON invalide.' }, 400) }

  const dir = (body.name ?? '').trim()
  if (!dir) return json({ error: 'Le nom est requis.' }, 400)

  const categoryPath = join(DOCS_PATH, dir)

  if (!categoryPath.startsWith(DOCS_PATH)) {
    return json({ error: 'Chemin non autorisé.' }, 403)
  }

  try {
    statSync(categoryPath)
  } catch {
    return json({ error: 'Catégorie introuvable.' }, 404)
  }

  const fiches = readdirSync(categoryPath).filter(
    f => /\.(mdx|md|mdoc)$/.test(f) && !/^index\.(mdx|md|mdoc)$/.test(f)
  )
  if (fiches.length > 0) {
    return json({ error: `Impossible de supprimer : ${fiches.length} fiche(s) dans cette catégorie.` }, 409)
  }

  try {
    rmSync(categoryPath, { recursive: true })
    return json({ ok: true })
  } catch {
    return json({ error: 'Erreur lors de la suppression.' }, 500)
  }
}

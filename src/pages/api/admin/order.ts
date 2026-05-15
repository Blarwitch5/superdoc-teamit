import type { APIRoute } from 'astro'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } })

const ORDER_PATH = join(process.cwd(), 'src/content/docs/_order.json')

// Only allow safe slug characters to prevent path traversal
const SLUG_RE = /^[a-z0-9][a-z0-9-]*$/

function isValidSlug(s: unknown): s is string {
  return typeof s === 'string' && SLUG_RE.test(s)
}

export const PUT: APIRoute = async ({ request }) => {
  let body: { categories?: unknown; fiches?: unknown }
  try { body = await request.json() }
  catch { return json({ error: 'Corps JSON invalide.' }, 400) }

  if (!Array.isArray(body.categories) || typeof body.fiches !== 'object' || body.fiches === null) {
    return json({ error: 'Format invalide.' }, 400)
  }

  if (!body.categories.every(isValidSlug)) {
    return json({ error: 'Nom de catégorie invalide.' }, 400)
  }

  for (const [cat, fiches] of Object.entries(body.fiches as Record<string, unknown>)) {
    if (!isValidSlug(cat) || !Array.isArray(fiches) || !fiches.every(isValidSlug)) {
      return json({ error: 'Format invalide.' }, 400)
    }
  }

  try {
    writeFileSync(ORDER_PATH, JSON.stringify(body, null, 2))
    return json({ ok: true })
  } catch {
    return json({ error: "Impossible de sauvegarder l'ordre." }, 500)
  }
}

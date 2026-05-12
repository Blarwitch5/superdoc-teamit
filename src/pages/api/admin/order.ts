import type { APIRoute } from 'astro'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const orderPath = join(process.cwd(), 'src/content/docs/_order.json')

export const PUT: APIRoute = async ({ request }) => {
  let body: { categories?: string[]; fiches?: Record<string, string[]> }
  try { body = await request.json() }
  catch { return json({ error: 'Corps JSON invalide.' }, 400) }

  if (!Array.isArray(body.categories) || typeof body.fiches !== 'object') {
    return json({ error: 'Format invalide.' }, 400)
  }

  try {
    writeFileSync(orderPath, JSON.stringify(body, null, 2))
    return json({ ok: true })
  } catch {
    return json({ error: 'Impossible de sauvegarder l\'ordre.' }, 500)
  }
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  })
}

import type { APIRoute } from 'astro'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { DOCS_PATH, parseFrontmatter, readOrder, getCategoryDirs, getCategoryLabel, getOrderedFiles } from '../../lib/content'

export const GET: APIRoute = ({ locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Non autorisé' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const order = readOrder()
  const entries: { title: string; description: string; category: string; href: string }[] = []

  for (const dir of getCategoryDirs(order)) {
    const label = getCategoryLabel(dir)
    for (const file of getOrderedFiles(dir, order)) {
      try {
        const raw = readFileSync(join(DOCS_PATH, dir, file), 'utf-8')
        const fm = parseFrontmatter(raw)
        const slug = file.replace(/\.(mdx|md|mdoc)$/, '')
        entries.push({
          title: fm.title || slug,
          description: fm.description || '',
          category: label,
          href: `/${dir}/${slug}/`,
        })
      } catch {}
    }
  }

  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' },
  })
}

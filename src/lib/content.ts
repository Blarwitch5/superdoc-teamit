import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

export const DOCS_PATH = join(process.cwd(), 'src/content/docs')

export type OrderData = {
  categories: string[]
  fiches: Record<string, string[]>
}

export function parseFrontmatter(content: string): Record<string, string> {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(content)
  if (!match) return {}
  const fm: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    fm[line.slice(0, idx).trim()] = line.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '')
  }
  return fm
}

export function readOrder(): OrderData {
  try {
    return JSON.parse(readFileSync(join(DOCS_PATH, '_order.json'), 'utf-8'))
  } catch {
    return { categories: [], fiches: {} }
  }
}

export function writeOrder(order: OrderData): void {
  writeFileSync(join(DOCS_PATH, '_order.json'), JSON.stringify(order, null, 2), 'utf-8')
}

export function getCategoryDirs(order: OrderData): string[] {
  let allDirs: string[]
  try {
    allDirs = readdirSync(DOCS_PATH).filter(name => {
      try { return statSync(join(DOCS_PATH, name)).isDirectory() && !name.startsWith('.') }
      catch { return false }
    })
  } catch {
    return []
  }
  return [
    ...order.categories.filter(d => allDirs.includes(d)),
    ...allDirs.filter(d => !order.categories.includes(d)).sort(),
  ]
}

export function getCategoryLabel(dir: string): string {
  try {
    const fm = parseFrontmatter(readFileSync(join(DOCS_PATH, dir, 'index.mdx'), 'utf-8'))
    if (fm.title) return fm.title
  } catch {}
  return dir.charAt(0).toUpperCase() + dir.slice(1)
}

export function getOrderedFiles(dir: string, order: OrderData): string[] {
  const dirPath = join(DOCS_PATH, dir)
  let rawFiles: string[]
  try {
    rawFiles = readdirSync(dirPath).filter(f => /\.(mdx|md|mdoc)$/.test(f) && !/^index\./.test(f))
  } catch {
    return []
  }
  const ficheOrder = order.fiches[dir] ?? []
  return [
    ...ficheOrder.map(s => rawFiles.find(f => f.replace(/\.(mdx|md|mdoc)$/, '') === s)).filter(Boolean) as string[],
    ...rawFiles.filter(f => !ficheOrder.includes(f.replace(/\.(mdx|md|mdoc)$/, ''))).sort(),
  ]
}

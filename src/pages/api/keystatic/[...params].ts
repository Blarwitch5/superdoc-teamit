import { makeHandler } from '@keystatic/astro/api'
import type { APIRoute } from 'astro'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { auth } from '../../../lib/auth'
import config from '../../../../keystatic.config'

const keystatic = makeHandler({ config })

function todayISO(): string {
  return new Date().toISOString().split('T')[0]
}

function base64UrlToUtf8(b64: string): string {
  const standard = b64.replace(/-/g, '+').replace(/_/g, '/')
  const binStr = atob(standard)
  const bytes = Uint8Array.from(binStr, (c) => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

function utf8ToBase64Url(text: string): string {
  const bytes = new TextEncoder().encode(text)
  let binStr = ''
  for (const byte of bytes) {
    binStr += String.fromCharCode(byte)
  }
  return btoa(binStr).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function readExistingAuthor(filePath: string): { createdBy: string; createdAt: string } {
  try {
    const content = readFileSync(join(process.cwd(), filePath), 'utf-8')
    const createdByMatch = /^createdBy:\s*(.+)$/m.exec(content)
    const createdAtMatch = /^createdAt:\s*(.+)$/m.exec(content)
    const stripQuotes = (val: string) => val.trim().replace(/^["']|["']$/g, '')
    return {
      createdBy: createdByMatch ? stripQuotes(createdByMatch[1]) : '',
      createdAt: createdAtMatch ? stripQuotes(createdAtMatch[1]) : ''
    }
  } catch {
    return { createdBy: '', createdAt: '' }
  }
}

function injectAuthorIntoFrontmatter(
  fileContent: string,
  userName: string,
  today: string,
  existingCreatedBy: string,
  existingCreatedAt: string
): string {
  if (!fileContent.startsWith('---')) return fileContent
  const closingDash = fileContent.indexOf('\n---', 3)
  if (closingDash === -1) return fileContent

  let frontmatter = fileContent.slice(3, closingDash)
  const body = fileContent.slice(closingDash)

  const setField = (fm: string, key: string, value: string): string => {
    const pattern = new RegExp(`^(${key}:).*$`, 'm')
    return pattern.test(fm) ? fm.replace(pattern, `${key}: ${value}`) : fm + `\n${key}: ${value}`
  }

  frontmatter = setField(frontmatter, 'createdBy', existingCreatedBy || userName)
  frontmatter = setField(frontmatter, 'createdAt', `"${existingCreatedAt || today}"`)
  frontmatter = setField(frontmatter, 'modifiedBy', userName)
  frontmatter = setField(frontmatter, 'modifiedAt', `"${today}"`)

  return `---${frontmatter}${body}`
}

/**
 * If the addition path has no category prefix (e.g. src/content/docs/mon-process.mdx),
 * read the category from the frontmatter and rewrite to src/content/docs/{category}/mon-process.mdx.
 */
function fixCategoryPath(addition: { path: string; contents: string }): { path: string; contents: string } {
  if (!/\.(md|mdx|mdoc)$/.test(addition.path)) return addition
  const docsMatch = /^src\/content\/docs\/(.+)$/.exec(addition.path)
  if (!docsMatch) return addition
  const segments = docsMatch[1].split('/')
  if (segments.length >= 2) return addition // already has category prefix

  try {
    const fileContent = base64UrlToUtf8(addition.contents)
    const categoryMatch = /^category:\s*(.+)$/m.exec(fileContent)
    if (!categoryMatch) return addition
    const category = categoryMatch[1].trim().replace(/^["']|["']$/g, '').toLowerCase().replace(/\s+/g, '-')
    if (!category) return addition
    const ext = (addition.path.match(/\.(md|mdx|mdoc)$/) ?? ['.mdx'])[0]
    const slug = segments[0].replace(/\.(md|mdx|mdoc)$/, '')
    return { ...addition, path: `src/content/docs/${category}/${slug}${ext}` }
  } catch {
    return addition
  }
}

export const ALL: APIRoute = async (context) => {
  const { request } = context
  const pathname = new URL(request.url).pathname

  if (
    request.method === 'POST' &&
    pathname.endsWith('/api/keystatic/update') &&
    (request.headers.get('content-type') ?? '').includes('application/json')
  ) {
    const session = await auth.api.getSession({ headers: request.headers })

    if (session?.user) {
      try {
        const body = await request.clone().json() as {
          additions?: Array<{ path: string; contents: string }>
          deletions?: Array<{ path: string }>
        }

        if (body?.additions && Array.isArray(body.additions) && body.additions.length > 0) {
          const userName = session.user.name ?? session.user.email ?? 'Inconnu'
          const today = todayISO()

          const enrichedAdditions = body.additions.map((addition) => {
            if (!/\.(md|mdx|mdoc)$/.test(addition.path)) return addition

            const fixed = fixCategoryPath(addition)
            try {
              const fileContent = base64UrlToUtf8(fixed.contents)
              const { createdBy: existingCreatedBy, createdAt: existingCreatedAt } = readExistingAuthor(fixed.path)
              const modified = injectAuthorIntoFrontmatter(fileContent, userName, today, existingCreatedBy, existingCreatedAt)
              return { ...fixed, contents: utf8ToBase64Url(modified) }
            } catch {
              return fixed
            }
          })

          return keystatic({
            ...context,
            request: new Request(request.url, {
              method: request.method,
              headers: request.headers,
              body: JSON.stringify({ ...body, additions: enrichedAdditions }),
            }),
          })
        }
      } catch {
        // Body parsing failed — fall through to normal handler
      }
    }
  }

  return keystatic(context)
}

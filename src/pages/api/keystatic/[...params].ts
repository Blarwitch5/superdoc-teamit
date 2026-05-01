import { makeHandler } from '@keystatic/astro/api'
import type { APIRoute } from 'astro'
import { auth } from '../../../lib/auth'
import config from '../../../../keystatic.config'

const keystatic = makeHandler({ config })

function todayISO(): string {
  return new Date().toISOString().split('T')[0]
}

/**
 * Decode base64url → UTF-8 string.
 * Keystatic sends file contents as base64url (with - and _ instead of + and /).
 */
function base64UrlToUtf8(b64: string): string {
  const standard = b64.replace(/-/g, '+').replace(/_/g, '/')
  const binStr = atob(standard)
  const bytes = Uint8Array.from(binStr, (c) => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

/**
 * Encode UTF-8 string → base64url.
 */
function utf8ToBase64Url(text: string): string {
  const bytes = new TextEncoder().encode(text)
  let binStr = ''
  for (const byte of bytes) {
    binStr += String.fromCharCode(byte)
  }
  return btoa(binStr).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

/**
 * Inject author fields into YAML frontmatter of a markdown/mdoc file.
 *
 * Strategy:
 *  - If createdBy is absent or empty → set createdBy + createdAt
 *  - Always set modifiedBy + modifiedAt
 *
 * Uses simple string replacement rather than a full YAML parser since
 * these fields are guaranteed to be single-line plain text (defined as
 * fields.text() in the Keystatic schema).
 */
function injectAuthorIntoFrontmatter(fileContent: string, userName: string, today: string): string {
  // Only process files that have YAML frontmatter
  if (!fileContent.startsWith('---')) return fileContent

  const closingDash = fileContent.indexOf('\n---', 3)
  if (closingDash === -1) return fileContent

  let frontmatter = fileContent.slice(3, closingDash)
  const body = fileContent.slice(closingDash)

  // Helper: set or replace a simple key: value pair in frontmatter
  const setField = (fm: string, key: string, value: string): string => {
    const pattern = new RegExp(`^(${key}:).*$`, 'm')
    const line = `${key}: ${value}`
    if (pattern.test(fm)) {
      return fm.replace(pattern, line)
    }
    // Append before the closing delimiter
    return fm + `\n${line}`
  }

  // Only set createdBy/createdAt when they are absent or empty
  const createdByMatch = /^createdBy:\s*(.*)$/m.exec(frontmatter)
  const createdByValue = createdByMatch?.[1]?.trim() ?? ''
  if (!createdByValue) {
    frontmatter = setField(frontmatter, 'createdBy', userName)
    frontmatter = setField(frontmatter, 'createdAt', today)
  }

  // Always stamp modifiedBy / modifiedAt
  frontmatter = setField(frontmatter, 'modifiedBy', userName)
  frontmatter = setField(frontmatter, 'modifiedAt', today)

  return `---${frontmatter}${body}`
}

export const ALL: APIRoute = async (context) => {
  const { request } = context

  // Only intercept the local-mode update endpoint
  if (
    request.method === 'POST' &&
    new URL(request.url).pathname.endsWith('/api/keystatic/update') &&
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
            // Only process markdown / MDX / MDDoc files that likely have frontmatter
            if (!/\.(md|mdx|mdoc)$/.test(addition.path)) return addition

            try {
              const fileContent = base64UrlToUtf8(addition.contents)
              const modified = injectAuthorIntoFrontmatter(fileContent, userName, today)
              return { ...addition, contents: utf8ToBase64Url(modified) }
            } catch {
              // If anything goes wrong decoding/re-encoding, return the original
              return addition
            }
          })

          const enrichedBody = { ...body, additions: enrichedAdditions }

          return keystatic({
            ...context,
            request: new Request(request.url, {
              method: request.method,
              headers: request.headers,
              body: JSON.stringify(enrichedBody),
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

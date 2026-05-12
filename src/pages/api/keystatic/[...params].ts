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
            try {
              const fileContent = base64UrlToUtf8(addition.contents)
              const { createdBy: existingCreatedBy, createdAt: existingCreatedAt } = readExistingAuthor(addition.path)
              const modified = injectAuthorIntoFrontmatter(fileContent, userName, today, existingCreatedBy, existingCreatedAt)
              return { ...addition, contents: utf8ToBase64Url(modified) }
            } catch {
              return addition
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

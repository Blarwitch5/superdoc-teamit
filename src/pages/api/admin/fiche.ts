import type { APIRoute } from 'astro'
import { writeFileSync, mkdirSync, existsSync, readFileSync, unlinkSync, rmdirSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { DOCS_PATH, readOrder, writeOrder, parseFrontmatter } from '../../../lib/content'

function todayISO() {
  return new Date().toISOString().split('T')[0]
}

function slugify(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Non autorisé' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  let body: { category?: string; title?: string; slug?: string }
  try { body = await request.json() } catch {
    return new Response(JSON.stringify({ error: 'Corps invalide' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const { category, title } = body
  if (!category || !title) {
    return new Response(JSON.stringify({ error: 'Catégorie et titre requis' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const slug = body.slug?.trim() || slugify(title)
  if (!slug) {
    return new Response(JSON.stringify({ error: 'Identifiant invalide' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const dirPath = join(DOCS_PATH, category)
  const filePath = join(dirPath, `${slug}.mdx`)

  if (existsSync(filePath)) {
    return new Response(JSON.stringify({ error: `Une fiche « ${slug} » existe déjà dans cette catégorie.` }), { status: 409, headers: { 'Content-Type': 'application/json' } })
  }

  const today = todayISO()
  const userName = locals.user.name ?? locals.user.email ?? 'Inconnu'

  const frontmatter = `---
title: ${title}
description: ''
subcategory: ''
createdBy: ${userName}
createdAt: "${today}"
modifiedBy: ${userName}
modifiedAt: "${today}"
---

À compléter.
`

  try {
    mkdirSync(dirPath, { recursive: true })
    writeFileSync(filePath, frontmatter, 'utf-8')
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Impossible de créer le fichier.' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }

  // Add to _order.json
  try {
    const order = readOrder()
    if (!order.fiches[category]) order.fiches[category] = []
    if (!order.fiches[category].includes(slug)) {
      order.fiches[category].push(slug)
    }
    writeOrder(order)
  } catch {}

  const ficheId = `${category}/${slug}`
  return new Response(JSON.stringify({ ok: true, ficheId, slug, category }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const PUT: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Non autorisé' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  let body: {
    originalCategory?: string; originalSlug?: string
    category?: string; slug?: string; title?: string
    description?: string; subcategory?: string; content?: string
  }
  try { body = await request.json() } catch {
    return new Response(JSON.stringify({ error: 'Corps invalide' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const { originalCategory, originalSlug, category, title } = body
  if (!originalCategory || !originalSlug || !category || !title) {
    return new Response(JSON.stringify({ error: 'Champs requis manquants' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const newSlug = body.slug?.trim() || slugify(title)
  const oldPath = join(DOCS_PATH, originalCategory, `${originalSlug}.mdx`)

  if (!existsSync(oldPath)) {
    return new Response(JSON.stringify({ error: 'Fiche introuvable' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
  }

  const newPath = join(DOCS_PATH, category, `${newSlug}.mdx`)
  const isMove  = newPath !== oldPath

  if (isMove && existsSync(newPath)) {
    return new Response(JSON.stringify({ error: `Une fiche « ${newSlug} » existe déjà dans « ${category} »` }), { status: 409, headers: { 'Content-Type': 'application/json' } })
  }

  // Preserve createdBy / createdAt from original file
  const oldRaw = readFileSync(oldPath, 'utf-8')
  const oldFm  = parseFrontmatter(oldRaw)

  const today    = todayISO()
  const userName = locals.user.name ?? locals.user.email ?? 'Inconnu'
  const desc     = (body.description ?? '').trim()
  const subcat   = (body.subcategory ?? '').trim()
  const content  = body.content ?? ''

  const newFile = `---
title: ${title}
description: ${desc ? desc : "''"}
subcategory: ${subcat ? subcat : "''"}
createdBy: ${oldFm.createdBy || userName}
createdAt: "${oldFm.createdAt || today}"
modifiedBy: ${userName}
modifiedAt: "${today}"
---
${content.startsWith('\n') ? content : '\n' + content}`

  try {
    mkdirSync(join(DOCS_PATH, category), { recursive: true })
    writeFileSync(newPath, newFile, 'utf-8')
    if (isMove) unlinkSync(oldPath)
  } catch {
    return new Response(JSON.stringify({ error: 'Erreur écriture fichier' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }

  // Update _order.json
  try {
    const order = readOrder()
    if (isMove) {
      // Remove from old category
      order.fiches[originalCategory] = (order.fiches[originalCategory] ?? []).filter(s => s !== originalSlug)
      // Add to new category
      if (!order.fiches[category]) order.fiches[category] = []
      if (!order.fiches[category].includes(newSlug)) order.fiches[category].push(newSlug)
    } else if (newSlug !== originalSlug) {
      // Rename within same category
      const idx = (order.fiches[category] ?? []).indexOf(originalSlug)
      if (idx !== -1) order.fiches[category][idx] = newSlug
      else {
        if (!order.fiches[category]) order.fiches[category] = []
        order.fiches[category].push(newSlug)
      }
    }
    writeOrder(order)
  } catch {}

  return new Response(JSON.stringify({ ok: true, ficheId: `${category}/${newSlug}` }), {
    headers: { 'Content-Type': 'application/json' },
  })
}

export const DELETE: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Non autorisé' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  let body: { category?: string; slug?: string }
  try { body = await request.json() } catch {
    return new Response(JSON.stringify({ error: 'Corps invalide' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const { category, slug } = body
  if (!category || !slug) {
    return new Response(JSON.stringify({ error: 'Catégorie et identifiant requis' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const filePath = join(DOCS_PATH, category, `${slug}.mdx`)
  if (!existsSync(filePath)) {
    return new Response(JSON.stringify({ error: 'Fiche introuvable' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
  }

  try {
    unlinkSync(filePath)
  } catch {
    return new Response(JSON.stringify({ error: 'Impossible de supprimer le fichier' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }

  try {
    const order = readOrder()
    order.fiches[category] = (order.fiches[category] ?? []).filter(s => s !== slug)
    writeOrder(order)
  } catch {}

  return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } })
}

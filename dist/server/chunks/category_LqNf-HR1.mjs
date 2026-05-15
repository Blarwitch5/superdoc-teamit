import { statSync, readdirSync, rmSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { j as jsonResponse } from './api_DSxlffQ-.mjs';
import { D as DOCS_PATH, r as readOrder, w as writeOrder } from './content_ChDt9Z8_.mjs';

function slugify(name) {
  return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
const POST = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Corps JSON invalide." }, 400);
  }
  const rawName = (body.name ?? "").trim();
  if (!rawName) return jsonResponse({ error: "Le nom est requis." }, 400);
  const dir = slugify(rawName);
  if (!dir) return jsonResponse({ error: "Nom de catégorie invalide." }, 400);
  const categoryPath = join(DOCS_PATH, dir);
  if (!categoryPath.startsWith(DOCS_PATH)) {
    return jsonResponse({ error: "Chemin non autorisé." }, 403);
  }
  try {
    statSync(categoryPath);
    return jsonResponse({ error: `La catégorie « ${dir} » existe déjà.` }, 409);
  } catch {
  }
  const label = rawName.charAt(0).toUpperCase() + rawName.slice(1);
  const description = (body.description ?? "").trim() || `Fiches de process liées à ${label.toLowerCase()}.`;
  try {
    mkdirSync(categoryPath, { recursive: true });
    writeFileSync(
      join(categoryPath, "index.mdx"),
      `---
title: ${label}
description: ${description}
category: ${dir}
---

${description}
`
    );
    const order = readOrder();
    if (!order.categories.includes(dir)) order.categories.push(dir);
    writeOrder(order);
    return jsonResponse({ ok: true, dir, label });
  } catch {
    return jsonResponse({ error: "Erreur lors de la création." }, 500);
  }
};
const DELETE = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Corps JSON invalide." }, 400);
  }
  const dir = (body.name ?? "").trim();
  if (!dir) return jsonResponse({ error: "Le nom est requis." }, 400);
  const categoryPath = join(DOCS_PATH, dir);
  if (!categoryPath.startsWith(DOCS_PATH)) {
    return jsonResponse({ error: "Chemin non autorisé." }, 403);
  }
  try {
    statSync(categoryPath);
  } catch {
    return jsonResponse({ error: "Catégorie introuvable." }, 404);
  }
  const fiches = readdirSync(categoryPath).filter(
    (f) => /\.(mdx|md|mdoc)$/.test(f) && !/^index\.(mdx|md|mdoc)$/.test(f)
  );
  if (fiches.length > 0) {
    return jsonResponse({ error: `Impossible de supprimer : ${fiches.length} fiche(s) dans cette catégorie.` }, 409);
  }
  try {
    rmSync(categoryPath, { recursive: true });
    return jsonResponse({ ok: true });
  } catch {
    return jsonResponse({ error: "Erreur lors de la suppression." }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

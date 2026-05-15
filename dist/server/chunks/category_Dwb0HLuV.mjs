import { statSync, readdirSync, rmSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { D as DOCS_PATH, r as readOrder, w as writeOrder } from './content_ChDt9Z8_.mjs';

const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
function slugify(name) {
  return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
const POST = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Corps JSON invalide." }, 400);
  }
  const rawName = (body.name ?? "").trim();
  if (!rawName) return json({ error: "Le nom est requis." }, 400);
  const dir = slugify(rawName);
  if (!dir) return json({ error: "Nom de catégorie invalide." }, 400);
  const categoryPath = join(DOCS_PATH, dir);
  if (!categoryPath.startsWith(DOCS_PATH)) {
    return json({ error: "Chemin non autorisé." }, 403);
  }
  try {
    statSync(categoryPath);
    return json({ error: `La catégorie « ${dir} » existe déjà.` }, 409);
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
    return json({ ok: true, dir, label });
  } catch {
    return json({ error: "Erreur lors de la création." }, 500);
  }
};
const DELETE = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Corps JSON invalide." }, 400);
  }
  const dir = (body.name ?? "").trim();
  if (!dir) return json({ error: "Le nom est requis." }, 400);
  const categoryPath = join(DOCS_PATH, dir);
  if (!categoryPath.startsWith(DOCS_PATH)) {
    return json({ error: "Chemin non autorisé." }, 403);
  }
  try {
    statSync(categoryPath);
  } catch {
    return json({ error: "Catégorie introuvable." }, 404);
  }
  const fiches = readdirSync(categoryPath).filter(
    (f) => /\.(mdx|md|mdoc)$/.test(f) && !/^index\.(mdx|md|mdoc)$/.test(f)
  );
  if (fiches.length > 0) {
    return json({ error: `Impossible de supprimer : ${fiches.length} fiche(s) dans cette catégorie.` }, 409);
  }
  try {
    rmSync(categoryPath, { recursive: true });
    return json({ ok: true });
  } catch {
    return json({ error: "Erreur lors de la suppression." }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

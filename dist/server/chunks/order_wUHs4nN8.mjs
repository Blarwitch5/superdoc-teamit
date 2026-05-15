import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
const ORDER_PATH = join(process.cwd(), "src/content/docs/_order.json");
const SLUG_RE = /^[a-z0-9][a-z0-9-]*$/;
function isValidSlug(s) {
  return typeof s === "string" && SLUG_RE.test(s);
}
const PUT = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Corps JSON invalide." }, 400);
  }
  if (!Array.isArray(body.categories) || typeof body.fiches !== "object" || body.fiches === null) {
    return json({ error: "Format invalide." }, 400);
  }
  if (!body.categories.every(isValidSlug)) {
    return json({ error: "Nom de catégorie invalide." }, 400);
  }
  for (const [cat, fiches] of Object.entries(body.fiches)) {
    if (!isValidSlug(cat) || !Array.isArray(fiches) || !fiches.every(isValidSlug)) {
      return json({ error: "Format invalide." }, 400);
    }
  }
  try {
    writeFileSync(ORDER_PATH, JSON.stringify(body, null, 2));
    return json({ ok: true });
  } catch {
    return json({ error: "Impossible de sauvegarder l'ordre." }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

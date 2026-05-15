import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { r as readOrder, g as getCategoryDirs, a as getCategoryLabel, b as getOrderedFiles, D as DOCS_PATH, p as parseFrontmatter } from './content_ChDt9Z8_.mjs';

const GET = ({ locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: "Non autorisé" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  const order = readOrder();
  const entries = [];
  for (const dir of getCategoryDirs(order)) {
    const label = getCategoryLabel(dir);
    for (const file of getOrderedFiles(dir, order)) {
      try {
        const raw = readFileSync(join(DOCS_PATH, dir, file), "utf-8");
        const fm = parseFrontmatter(raw);
        const slug = file.replace(/\.(mdx|md|mdoc)$/, "");
        entries.push({
          title: fm.title || slug,
          description: fm.description || "",
          category: label,
          href: `/${dir}/${slug}/`
        });
      } catch {
      }
    }
  }
  return new Response(JSON.stringify(entries), {
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DOCS_PATH = join(process.cwd(), "src/content/docs");
function parseFrontmatter(content) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(content);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    fm[line.slice(0, idx).trim()] = line.slice(idx + 1).trim().replace(/^['"]|['"]$/g, "");
  }
  return fm;
}
function readOrder() {
  try {
    return JSON.parse(readFileSync(join(DOCS_PATH, "_order.json"), "utf-8"));
  } catch {
    return { categories: [], fiches: {} };
  }
}
function writeOrder(order) {
  writeFileSync(join(DOCS_PATH, "_order.json"), JSON.stringify(order, null, 2), "utf-8");
}
function getCategoryDirs(order) {
  let allDirs;
  try {
    allDirs = readdirSync(DOCS_PATH).filter((name) => {
      try {
        return statSync(join(DOCS_PATH, name)).isDirectory() && !name.startsWith(".");
      } catch {
        return false;
      }
    });
  } catch {
    return [];
  }
  return [
    ...order.categories.filter((d) => allDirs.includes(d)),
    ...allDirs.filter((d) => !order.categories.includes(d)).sort()
  ];
}
function getCategoryLabel(dir) {
  try {
    const fm = parseFrontmatter(readFileSync(join(DOCS_PATH, dir, "index.mdx"), "utf-8"));
    if (fm.title) return fm.title;
  } catch {
  }
  return dir.charAt(0).toUpperCase() + dir.slice(1);
}
function getOrderedFiles(dir, order) {
  const dirPath = join(DOCS_PATH, dir);
  let rawFiles;
  try {
    rawFiles = readdirSync(dirPath).filter((f) => /\.(mdx|md|mdoc)$/.test(f) && !/^index\./.test(f));
  } catch {
    return [];
  }
  const ficheOrder = order.fiches[dir] ?? [];
  return [
    ...ficheOrder.map((s) => rawFiles.find((f) => f.replace(/\.(mdx|md|mdoc)$/, "") === s)).filter(Boolean),
    ...rawFiles.filter((f) => !ficheOrder.includes(f.replace(/\.(mdx|md|mdoc)$/, ""))).sort()
  ];
}

export { DOCS_PATH as D, getCategoryLabel as a, getOrderedFiles as b, getCategoryDirs as g, parseFrontmatter as p, readOrder as r, writeOrder as w };

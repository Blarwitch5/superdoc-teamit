import { c as createComponent } from './astro-component_Dpsra13u.mjs';
import { a3 as renderComponent, a4 as renderTemplate, aW as maybeRenderHead, aY as addAttribute } from './sequence_BHhiZ0XQ.mjs';
import { readFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { $ as $$AppLayout, a as $$TeamItLogo, b as $$ThemeSwitcher } from './TeamItLogo_COs6I0mQ.mjs';
import { r as readOrder, g as getCategoryDirs, a as getCategoryLabel, b as getOrderedFiles, p as parseFrontmatter, D as DOCS_PATH } from './content_ChDt9Z8_.mjs';

const $$Compte = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Compte;
  if (!Astro2.locals.user) return Astro2.redirect("/login");
  const user = Astro2.locals.user;
  const initials = (user.name || user.email || "?").charAt(0).toUpperCase();
  const savedOrder = readOrder();
  const allFiches = [];
  for (const dir of getCategoryDirs(savedOrder)) {
    const categoryLabel = getCategoryLabel(dir);
    for (const file of getOrderedFiles(dir, savedOrder)) {
      const slug = basename(file).replace(/\.(mdx|md|mdoc)$/, "");
      try {
        const fm = parseFrontmatter(readFileSync(join(DOCS_PATH, dir, file), "utf-8"));
        allFiches.push({
          title: fm.title || slug,
          category: dir,
          categoryLabel,
          href: `/${dir}/${slug}/`,
          createdAt: fm.createdAt || "",
          modifiedAt: fm.modifiedAt || "",
          createdBy: fm.createdBy || "",
          modifiedBy: fm.modifiedBy || ""
        });
      } catch {
      }
    }
  }
  const userName = user.name || user.email || "";
  const myCreated = allFiches.filter((f) => f.createdBy.trim() === userName.trim());
  const myModified = allFiches.filter((f) => f.modifiedBy.trim() === userName.trim() && f.modifiedAt !== f.createdAt);
  const totalFiches = allFiches.length;
  const totalMyCreated = myCreated.length;
  const totalMyMod = myModified.length;
  const lastCreated = [...myCreated].sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0] ?? null;
  const lastModified = [...myModified].sort((a, b) => b.modifiedAt.localeCompare(a.modifiedAt))[0] ?? null;
  function formatDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const date = d.toLocaleDateString("fr-CH", { day: "numeric", month: "long", year: "numeric" });
    if (!dateStr.includes("T")) return date;
    const h = String(d.getHours()).padStart(2, "0");
    const m = String(d.getMinutes()).padStart(2, "0");
    return `${date} à ${h}h${m}`;
  }
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Mon compte — Documentation Team IT", "class": "astro-l3w6cxt5" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page astro-l3w6cxt5"> <header class="top-bar astro-l3w6cxt5"> <a href="/" class="logo-link astro-l3w6cxt5"> <div class="logo-bg astro-l3w6cxt5">${renderComponent($$result2, "TeamItLogo", $$TeamItLogo, { "height": 24, "aria-hidden": true, "class": "astro-l3w6cxt5" })}</div> </a> <nav class="top-nav astro-l3w6cxt5"> ${renderComponent($$result2, "ThemeSwitcher", $$ThemeSwitcher, { "class": "astro-l3w6cxt5" })} <a href="/admin" class="nav-link astro-l3w6cxt5">Gérer les fiches</a> <a href="/logout" class="nav-link muted astro-l3w6cxt5">Déconnexion</a> </nav> </header> <main class="astro-l3w6cxt5"> <div class="container astro-l3w6cxt5"> <!-- Profile --> <section class="profile-card astro-l3w6cxt5"> <div class="avatar astro-l3w6cxt5">${initials}</div> <div class="profile-info astro-l3w6cxt5"> ${user.name && renderTemplate`<p class="profile-name astro-l3w6cxt5">${user.name}</p>`} <p class="profile-email astro-l3w6cxt5">${user.email}</p> <a href="/change-password" class="btn btn-secondary btn-sm astro-l3w6cxt5"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="astro-l3w6cxt5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" class="astro-l3w6cxt5"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" class="astro-l3w6cxt5"></path></svg>
Modifier le mot de passe
</a> </div> </section> <!-- Stats --> <section class="stats-grid astro-l3w6cxt5"> <div class="stat-card astro-l3w6cxt5"> <span class="stat-value astro-l3w6cxt5">${totalFiches}</span> <span class="stat-label astro-l3w6cxt5">fiches au total</span> </div> <div class="stat-card accent astro-l3w6cxt5"> <span class="stat-value astro-l3w6cxt5">${totalMyCreated}</span> <span class="stat-label astro-l3w6cxt5">créées par moi</span> </div> <div class="stat-card astro-l3w6cxt5"> <span class="stat-value astro-l3w6cxt5">${totalMyMod}</span> <span class="stat-label astro-l3w6cxt5">modifiées par moi</span> </div> </section> <!-- Last activity --> ${(lastCreated || lastModified) && renderTemplate`<section class="activity-section astro-l3w6cxt5"> <h2 class="section-title astro-l3w6cxt5">Dernière activité</h2> <div class="activity-list astro-l3w6cxt5"> ${lastCreated && renderTemplate`<div class="activity-item astro-l3w6cxt5"> <span class="activity-badge created astro-l3w6cxt5">Créée</span> <a${addAttribute(lastCreated.href, "href")} class="activity-link astro-l3w6cxt5">${lastCreated.title}</a> <span class="activity-meta astro-l3w6cxt5">${lastCreated.categoryLabel} · ${formatDate(lastCreated.createdAt)}</span> </div>`} ${lastModified && renderTemplate`<div class="activity-item astro-l3w6cxt5"> <span class="activity-badge modified astro-l3w6cxt5">Modifiée</span> <a${addAttribute(lastModified.href, "href")} class="activity-link astro-l3w6cxt5">${lastModified.title}</a> <span class="activity-meta astro-l3w6cxt5">${lastModified.categoryLabel} · ${formatDate(lastModified.modifiedAt)}</span> </div>`} </div> </section>`} <!-- My fiches --> ${myCreated.length > 0 && renderTemplate`<section class="fiches-section astro-l3w6cxt5"> <h2 class="section-title astro-l3w6cxt5">Fiches créées par moi</h2> <div class="fiches-table astro-l3w6cxt5"> ${myCreated.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((f) => renderTemplate`<a${addAttribute(f.href, "href")} class="fiche-row astro-l3w6cxt5"> <span class="fiche-title astro-l3w6cxt5">${f.title}</span> <span class="fiche-cat astro-l3w6cxt5">${f.categoryLabel}</span> <span class="fiche-date astro-l3w6cxt5">${formatDate(f.createdAt)}</span> </a>`)} </div> </section>`} </div> </main> </div> ` })}`;
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/compte.astro", void 0);

const $$file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/compte.astro";
const $$url = "/compte";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Compte,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

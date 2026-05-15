import { c as createComponent } from './astro-component_Dpsra13u.mjs';
import { a3 as renderComponent, a4 as renderTemplate, aW as maybeRenderHead, aY as addAttribute } from './sequence_BHhiZ0XQ.mjs';
import { r as renderScript } from './script_T86Sxpel.mjs';
import { join, basename } from 'node:path';
import { readFileSync, readdirSync } from 'node:fs';
import { $ as $$AppLayout, a as $$TeamItLogo, b as $$ThemeSwitcher } from './TeamItLogo_COs6I0mQ.mjs';
import { r as readOrder, g as getCategoryDirs, D as DOCS_PATH, p as parseFrontmatter } from './content_ChDt9Z8_.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const user = Astro2.locals.user;
  const savedOrder = readOrder();
  const categories = [];
  for (const dir of getCategoryDirs(savedOrder)) {
    const dirPath = join(DOCS_PATH, dir);
    let label = dir.charAt(0).toUpperCase() + dir.slice(1);
    try {
      const fm = parseFrontmatter(readFileSync(join(dirPath, "index.mdx"), "utf-8"));
      if (fm.title) label = fm.title;
    } catch {
    }
    let rawFiles = [];
    try {
      rawFiles = readdirSync(dirPath).filter((f) => /\.(mdx|md|mdoc)$/.test(f) && !/^index\.(mdx|md|mdoc)$/.test(f));
    } catch {
    }
    const ficheOrder = savedOrder.fiches[dir] ?? [];
    const orderedFiles = [
      ...ficheOrder.map((s) => rawFiles.find((f) => f.replace(/\.(mdx|md|mdoc)$/, "") === s)).filter(Boolean),
      ...rawFiles.filter((f) => !ficheOrder.includes(f.replace(/\.(mdx|md|mdoc)$/, ""))).sort()
    ];
    const fiches = orderedFiles.map((file) => {
      const slug = basename(file).replace(/\.(mdx|md|mdoc)$/, "");
      try {
        const fm = parseFrontmatter(readFileSync(join(dirPath, file), "utf-8"));
        return { slug, title: fm.title || slug, description: fm.description || "", modifiedAt: fm.modifiedAt || fm.createdAt || "", id: `${dir}/${slug}` };
      } catch {
        return { slug, title: slug, description: "", modifiedAt: "", id: `${dir}/${slug}` };
      }
    });
    categories.push({ dir, label, fiches });
  }
  const totalFiches = categories.reduce((sum, c) => sum + c.fiches.length, 0);
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Gérer les fiches — Documentation Team IT", "class": "astro-u2h3djql" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="astro-u2h3djql"> <div class="header-left astro-u2h3djql"> <div class="logo-bg astro-u2h3djql"> ${renderComponent($$result2, "TeamItLogo", $$TeamItLogo, { "height": 24, "aria-hidden": true, "class": "astro-u2h3djql" })} </div> <span class="header-title astro-u2h3djql">Gérer les fiches</span> </div> <div class="header-right astro-u2h3djql"> ${renderComponent($$result2, "ThemeSwitcher", $$ThemeSwitcher, { "class": "astro-u2h3djql" })} <a href="/" class="btn btn-ghost hide-mobile astro-u2h3djql">← Docs</a> <!-- User dropdown --> <div class="user-menu astro-u2h3djql"> <button class="user-btn astro-u2h3djql" id="user-btn" aria-expanded="false" aria-haspopup="true" title="Menu utilisateur"> <span class="user-avatar astro-u2h3djql">${(user.name || user.email || "?").charAt(0).toUpperCase()}</span> </button> <div class="user-dropdown astro-u2h3djql" id="user-dropdown" role="menu"> <div class="dropdown-user-name astro-u2h3djql">${user.name || user.email}</div> <div class="dropdown-divider astro-u2h3djql"></div> <a href="/" role="menuitem" class="astro-u2h3djql"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="astro-u2h3djql"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" class="astro-u2h3djql"></path><polyline points="9 22 9 12 15 12 15 22" class="astro-u2h3djql"></polyline></svg>
Documentation
</a> <a href="/change-password" role="menuitem" class="astro-u2h3djql"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="astro-u2h3djql"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" class="astro-u2h3djql"></path><circle cx="12" cy="7" r="4" class="astro-u2h3djql"></circle></svg>
Mon compte
</a> <div class="dropdown-divider astro-u2h3djql"></div> <a href="/logout" role="menuitem" class="danger astro-u2h3djql"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="astro-u2h3djql"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" class="astro-u2h3djql"></path><polyline points="16 17 21 12 16 7" class="astro-u2h3djql"></polyline><line x1="21" y1="12" x2="9" y2="12" class="astro-u2h3djql"></line></svg>
Déconnexion
</a> </div> </div> </div> </header> <main class="astro-u2h3djql"> <div class="page-header astro-u2h3djql"> <div class="astro-u2h3djql"> <h1 class="page-title astro-u2h3djql">Fiches de process</h1> <p class="page-meta astro-u2h3djql">${totalFiches} fiche${totalFiches > 1 ? "s" : ""} · ${categories.length} catégorie${categories.length > 1 ? "s" : ""}</p> </div> <div class="page-actions astro-u2h3djql"> <button class="btn btn-secondary astro-u2h3djql" id="toggle-add-cat">+ Catégorie</button> <a href="/admin/fiche" class="btn btn-primary astro-u2h3djql">+ Nouvelle fiche</a> </div> </div> <div id="add-category-form" class="astro-u2h3djql"> <div class="cat-fields astro-u2h3djql"> <div class="form-field astro-u2h3djql"> <label for="cat-name" class="astro-u2h3djql">Nom de la catégorie</label> <input class="app-input astro-u2h3djql" type="text" id="cat-name" placeholder="ex : Réseau, Sécurité…" autocomplete="off"> <span class="form-hint astro-u2h3djql">Converti automatiquement en minuscules sans accents.</span> </div> <div class="form-field astro-u2h3djql"> <label for="cat-desc" class="astro-u2h3djql">Description <span class="form-optional astro-u2h3djql">(optionnel)</span></label> <input class="app-input astro-u2h3djql" type="text" id="cat-desc" placeholder="Courte description pour la sidebar."> </div> </div> <div class="cat-footer astro-u2h3djql"> <div class="error-text form-error astro-u2h3djql" id="cat-error"></div> <div class="cat-actions astro-u2h3djql"> <button class="btn btn-ghost astro-u2h3djql" id="cancel-add-cat">Annuler</button> <button class="btn btn-primary astro-u2h3djql" id="submit-add-cat">Créer la catégorie</button> </div> </div> </div> <template id="grip-icon" class="astro-u2h3djql"> <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="astro-u2h3djql"> <circle cx="9" cy="5" r="1.5" class="astro-u2h3djql"></circle><circle cx="15" cy="5" r="1.5" class="astro-u2h3djql"></circle> <circle cx="9" cy="12" r="1.5" class="astro-u2h3djql"></circle><circle cx="15" cy="12" r="1.5" class="astro-u2h3djql"></circle> <circle cx="9" cy="19" r="1.5" class="astro-u2h3djql"></circle><circle cx="15" cy="19" r="1.5" class="astro-u2h3djql"></circle> </svg> </template> <div class="accordion astro-u2h3djql" id="accordion"> ${categories.map((cat) => renderTemplate`<details open${addAttribute(cat.dir, "data-cat")} class="astro-u2h3djql"> <summary class="astro-u2h3djql"> <div class="summary-left astro-u2h3djql"> <div class="drag-handle cat-drag-handle astro-u2h3djql" title="Glisser pour réorganiser"></div> <span class="category-label astro-u2h3djql">${cat.label}</span> <span class="category-count astro-u2h3djql">${cat.fiches.length}</span> </div> <div class="summary-right astro-u2h3djql"> <button class="btn-delete-cat astro-u2h3djql"${addAttribute(cat.dir, "data-cat")}${addAttribute(cat.label, "data-label")}${addAttribute(cat.fiches.length > 0 ? `Suppression impossible : ${cat.fiches.length} fiche(s) présente(s)` : `Supprimer la catégorie ${cat.label}`, "title")}${addAttribute(cat.fiches.length > 0, "disabled")}${addAttribute(`Supprimer ${cat.label}`, "aria-label")}> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="astro-u2h3djql"> <polyline points="3 6 5 6 21 6" class="astro-u2h3djql"></polyline><path d="M19 6l-1 14H6L5 6" class="astro-u2h3djql"></path><path d="M10 11v6" class="astro-u2h3djql"></path><path d="M14 11v6" class="astro-u2h3djql"></path><path d="M9 6V4h6v2" class="astro-u2h3djql"></path> </svg> </button> <svg class="chevron astro-u2h3djql" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <polyline points="6 9 12 15 18 9" class="astro-u2h3djql"></polyline> </svg> </div> </summary> ${cat.fiches.length > 0 ? renderTemplate`<div class="fiches-list astro-u2h3djql"> ${cat.fiches.map((fiche) => renderTemplate`<div class="fiche-item astro-u2h3djql" draggable="true"${addAttribute(fiche.slug, "data-fiche")}${addAttribute(cat.dir, "data-cat")}> <div class="drag-handle fiche-drag-handle astro-u2h3djql" title="Glisser pour réorganiser"></div> <div class="fiche-info astro-u2h3djql"> <div class="fiche-title astro-u2h3djql">${fiche.title}</div> ${fiche.description && renderTemplate`<div class="fiche-description astro-u2h3djql">${fiche.description}</div>`} </div> <div class="fiche-actions astro-u2h3djql"> ${fiche.modifiedAt && renderTemplate`<span class="fiche-date astro-u2h3djql">${fiche.modifiedAt}</span>`} <a${addAttribute(`/${cat.dir}/${fiche.slug}/`, "href")} class="btn-view astro-u2h3djql" target="_blank" rel="noopener">Voir</a> <a${addAttribute(`/admin/fiche/?cat=${cat.dir}&slug=${fiche.slug}`, "href")} class="btn-edit astro-u2h3djql">Modifier</a> </div> </div>`)} <div class="new-fiche-row astro-u2h3djql"> <a href="/admin/fiche" class="btn-new-fiche astro-u2h3djql">+ Ajouter une fiche</a> </div> </div>` : renderTemplate`<div class="empty astro-u2h3djql">
Aucune fiche. <a href="/admin/fiche" class="astro-u2h3djql">Créer la première →</a> </div>`} </details>`)} </div> </main> <div id="toast" role="status" aria-live="polite" class="astro-u2h3djql"></div> ` })}  ${renderScript($$result, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/admin/index.astro", void 0);

const $$file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent } from './astro-component_Dpsra13u.mjs';
import { a3 as renderComponent, a4 as renderTemplate, aW as maybeRenderHead, aY as addAttribute } from './sequence_BHhiZ0XQ.mjs';
import { r as renderScript } from './script_T86Sxpel.mjs';
import { join, basename } from 'node:path';
import { readFileSync, readdirSync } from 'node:fs';
import { $ as $$AppLayout, a as $$TeamItLogo } from './TeamItLogo_UjPu7uxY.mjs';
import { $ as $$ThemeSwitcher } from './ThemeSwitcher_Cjog_WEl.mjs';
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
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Administration — Documentation Team IT", "class": "astro-u2h3djql" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="astro-u2h3djql"> <div class="header-left astro-u2h3djql"> <div class="logo-bg astro-u2h3djql"> ${renderComponent($$result2, "TeamItLogo", $$TeamItLogo, { "height": 24, "aria-hidden": true, "class": "astro-u2h3djql" })} </div> <span class="header-title astro-u2h3djql">Administration</span> </div> <div class="header-right astro-u2h3djql"> ${renderComponent($$result2, "ThemeSwitcher", $$ThemeSwitcher, { "class": "astro-u2h3djql" })} <span class="user-info astro-u2h3djql">${user.name || user.email}</span> <a href="/change-password" class="btn btn-ghost astro-u2h3djql">Mot de passe</a> <a href="/" class="btn btn-ghost astro-u2h3djql">← Docs</a> <a href="/logout" class="btn-logout astro-u2h3djql">Déconnexion</a> </div> </header> <main class="astro-u2h3djql"> <div class="page-header astro-u2h3djql"> <div class="astro-u2h3djql"> <h1 class="page-title astro-u2h3djql">Fiches de process</h1> <p class="page-meta astro-u2h3djql">${totalFiches} fiche${totalFiches > 1 ? "s" : ""} · ${categories.length} catégorie${categories.length > 1 ? "s" : ""}</p> </div> <div class="page-actions astro-u2h3djql"> <button class="btn btn-secondary astro-u2h3djql" id="toggle-add-cat">+ Catégorie</button> <a href="/admin/fiche" class="btn btn-primary astro-u2h3djql">+ Nouvelle fiche</a> </div> </div> <div id="add-category-form" class="astro-u2h3djql"> <div class="cat-fields astro-u2h3djql"> <div class="form-field astro-u2h3djql"> <label for="cat-name" class="astro-u2h3djql">Nom de la catégorie</label> <input class="app-input astro-u2h3djql" type="text" id="cat-name" placeholder="ex : Réseau, Sécurité…" autocomplete="off"> <span class="form-hint astro-u2h3djql">Converti automatiquement en minuscules sans accents.</span> </div> <div class="form-field astro-u2h3djql"> <label for="cat-desc" class="astro-u2h3djql">Description <span class="form-optional astro-u2h3djql">(optionnel)</span></label> <input class="app-input astro-u2h3djql" type="text" id="cat-desc" placeholder="Courte description pour la sidebar."> </div> </div> <div class="cat-footer astro-u2h3djql"> <div class="error-text form-error astro-u2h3djql" id="cat-error"></div> <div class="cat-actions astro-u2h3djql"> <button class="btn btn-ghost astro-u2h3djql" id="cancel-add-cat">Annuler</button> <button class="btn btn-primary astro-u2h3djql" id="submit-add-cat">Créer la catégorie</button> </div> </div> </div> <template id="grip-icon" class="astro-u2h3djql"> <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="astro-u2h3djql"> <circle cx="9" cy="5" r="1.5" class="astro-u2h3djql"></circle><circle cx="15" cy="5" r="1.5" class="astro-u2h3djql"></circle> <circle cx="9" cy="12" r="1.5" class="astro-u2h3djql"></circle><circle cx="15" cy="12" r="1.5" class="astro-u2h3djql"></circle> <circle cx="9" cy="19" r="1.5" class="astro-u2h3djql"></circle><circle cx="15" cy="19" r="1.5" class="astro-u2h3djql"></circle> </svg> </template> <div class="accordion astro-u2h3djql" id="accordion"> ${categories.map((cat) => renderTemplate`<details open${addAttribute(cat.dir, "data-cat")} class="astro-u2h3djql"> <summary class="astro-u2h3djql"> <div class="summary-left astro-u2h3djql"> <div class="drag-handle cat-drag-handle astro-u2h3djql" title="Glisser pour réorganiser"></div> <span class="category-label astro-u2h3djql">${cat.label}</span> <span class="category-count astro-u2h3djql">${cat.fiches.length}</span> </div> <div class="summary-right astro-u2h3djql"> <button class="btn-delete-cat astro-u2h3djql"${addAttribute(cat.dir, "data-cat")}${addAttribute(cat.label, "data-label")}${addAttribute(cat.fiches.length > 0 ? `Suppression impossible : ${cat.fiches.length} fiche(s) présente(s)` : `Supprimer la catégorie ${cat.label}`, "title")}${addAttribute(cat.fiches.length > 0, "disabled")}${addAttribute(`Supprimer ${cat.label}`, "aria-label")}> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="astro-u2h3djql"> <polyline points="3 6 5 6 21 6" class="astro-u2h3djql"></polyline><path d="M19 6l-1 14H6L5 6" class="astro-u2h3djql"></path><path d="M10 11v6" class="astro-u2h3djql"></path><path d="M14 11v6" class="astro-u2h3djql"></path><path d="M9 6V4h6v2" class="astro-u2h3djql"></path> </svg> </button> <svg class="chevron astro-u2h3djql" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <polyline points="6 9 12 15 18 9" class="astro-u2h3djql"></polyline> </svg> </div> </summary> ${cat.fiches.length > 0 ? renderTemplate`<div class="fiches-list astro-u2h3djql"> ${cat.fiches.map((fiche) => renderTemplate`<div class="fiche-item astro-u2h3djql" draggable="true"${addAttribute(fiche.slug, "data-fiche")}${addAttribute(cat.dir, "data-cat")}> <div class="drag-handle fiche-drag-handle astro-u2h3djql" title="Glisser pour réorganiser"></div> <div class="fiche-info astro-u2h3djql"> <div class="fiche-title astro-u2h3djql">${fiche.title}</div> ${fiche.description && renderTemplate`<div class="fiche-description astro-u2h3djql">${fiche.description}</div>`} </div> <div class="fiche-actions astro-u2h3djql"> ${fiche.modifiedAt && renderTemplate`<span class="fiche-date astro-u2h3djql">${fiche.modifiedAt}</span>`} <a${addAttribute(`/${cat.dir}/${fiche.slug}/`, "href")} class="btn-view astro-u2h3djql" target="_blank" rel="noopener">Voir</a> <a${addAttribute(`/admin/fiche/?cat=${cat.dir}&slug=${fiche.slug}`, "href")} class="btn-edit astro-u2h3djql">Modifier</a> </div> </div>`)} <div class="new-fiche-row astro-u2h3djql"> <a href="/admin/fiche" class="btn-new-fiche astro-u2h3djql">+ Ajouter une fiche</a> </div> </div>` : renderTemplate`<div class="empty astro-u2h3djql">
Aucune fiche. <a href="/admin/fiche" class="astro-u2h3djql">Créer la première →</a> </div>`} </details>`)} </div> </main>  <section class="users-section astro-u2h3djql"> <div class="section-header astro-u2h3djql"> <div class="astro-u2h3djql"> <h2 class="section-title astro-u2h3djql">Utilisateurs</h2> <p class="page-meta astro-u2h3djql">Comptes ayant accès à la documentation</p> </div> <button class="btn btn-secondary astro-u2h3djql" id="toggle-add-user">+ Utilisateur</button> </div> <div id="add-user-form" class="astro-u2h3djql"> <div class="cat-fields user-fields astro-u2h3djql"> <div class="form-field astro-u2h3djql"> <label for="user-name" class="astro-u2h3djql">Nom complet</label> <input class="app-input astro-u2h3djql" type="text" id="user-name" placeholder="Prénom Nom" autocomplete="off"> </div> <div class="form-field astro-u2h3djql"> <label for="user-email" class="astro-u2h3djql">Email</label> <input class="app-input astro-u2h3djql" type="email" id="user-email" placeholder="prenom@team-it.ch" autocomplete="off"> </div> <div class="form-field astro-u2h3djql"> <label for="user-password" class="astro-u2h3djql">Mot de passe <span class="form-optional astro-u2h3djql">(min. 8 caractères)</span></label> <input class="app-input astro-u2h3djql" type="password" id="user-password" minlength="8" autocomplete="new-password"> </div> </div> <div class="cat-footer astro-u2h3djql"> <div class="error-text form-error astro-u2h3djql" id="user-error"></div> <div class="cat-actions astro-u2h3djql"> <button class="btn btn-ghost astro-u2h3djql" id="cancel-add-user">Annuler</button> <button class="btn btn-primary astro-u2h3djql" id="submit-add-user">Créer l'utilisateur</button> </div> </div> </div> </section> <div id="toast" role="status" aria-live="polite" class="astro-u2h3djql"></div> ` })}  ${renderScript($$result, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}`;
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

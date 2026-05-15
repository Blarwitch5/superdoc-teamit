import { c as createComponent } from './astro-component_Dpsra13u.mjs';
import { a3 as renderComponent, a4 as renderTemplate, aW as maybeRenderHead } from './sequence_BHhiZ0XQ.mjs';
import { $ as $$AppLayout, a as $$TeamItLogo } from './TeamItLogo_UjPu7uxY.mjs';
import { a as auth } from './auth_DnJXfvn4.mjs';

const $$ChangePassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ChangePassword;
  if (!Astro2.locals.user) return Astro2.redirect("/login");
  const user = Astro2.locals.user;
  let error = "";
  let success = false;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const currentPassword = String(data.get("currentPassword") ?? "");
    const newPassword = String(data.get("newPassword") ?? "");
    const confirmPassword = String(data.get("confirmPassword") ?? "");
    if (newPassword !== confirmPassword) {
      error = "Les nouveaux mots de passe ne correspondent pas.";
    } else if (newPassword.length < 8) {
      error = "Le nouveau mot de passe doit contenir au moins 8 caractères.";
    } else {
      try {
        await auth.api.changePassword({
          body: { currentPassword, newPassword, revokeOtherSessions: false },
          headers: Astro2.request.headers
        });
        success = true;
      } catch {
        error = "Mot de passe actuel incorrect.";
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Changer le mot de passe — Documentation Team IT", "class": "astro-vbnpqbnz" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page astro-vbnpqbnz"> <header class="top-bar astro-vbnpqbnz"> <a href="/" class="logo-link astro-vbnpqbnz"> <div class="logo-bg astro-vbnpqbnz">${renderComponent($$result2, "TeamItLogo", $$TeamItLogo, { "height": 24, "aria-hidden": true, "class": "astro-vbnpqbnz" })}</div> </a> <nav class="top-nav astro-vbnpqbnz"> <a href="/admin" class="nav-link astro-vbnpqbnz">Gérer les fiches</a> <a href="/logout" class="nav-link muted astro-vbnpqbnz">Déconnexion</a> </nav> </header> <main class="astro-vbnpqbnz"> <div class="card astro-vbnpqbnz"> <h1 class="card-title astro-vbnpqbnz">Changer le mot de passe</h1> <p class="card-sub astro-vbnpqbnz">${user.name || user.email}</p> ${success ? renderTemplate`<div class="success-box astro-vbnpqbnz">
Mot de passe modifié avec succès.
<a href="/" class="astro-vbnpqbnz">Retour à la documentation →</a> </div>` : renderTemplate`<form method="POST" class="astro-vbnpqbnz"> ${error && renderTemplate`<p class="error-box astro-vbnpqbnz" role="alert">${error}</p>`} <label class="astro-vbnpqbnz">
Mot de passe actuel
<input class="app-input astro-vbnpqbnz" type="password" name="currentPassword" required autocomplete="current-password"> </label> <label class="astro-vbnpqbnz">
Nouveau mot de passe
<input class="app-input astro-vbnpqbnz" type="password" name="newPassword" required autocomplete="new-password" minlength="8"> </label> <label class="astro-vbnpqbnz">
Confirmer le nouveau mot de passe
<input class="app-input astro-vbnpqbnz" type="password" name="confirmPassword" required autocomplete="new-password" minlength="8"> </label> <div class="actions astro-vbnpqbnz"> <a href="/" class="btn btn-ghost astro-vbnpqbnz">Annuler</a> <button type="submit" class="btn btn-primary astro-vbnpqbnz">Enregistrer</button> </div> </form>`} </div> </main> </div> ` })}`;
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/change-password.astro", void 0);

const $$file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/change-password.astro";
const $$url = "/change-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ChangePassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

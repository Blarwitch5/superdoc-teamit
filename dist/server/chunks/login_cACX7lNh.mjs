import { c as createComponent } from './astro-component_Dpsra13u.mjs';
import { a3 as renderComponent, a4 as renderTemplate, aW as maybeRenderHead } from './sequence_BHhiZ0XQ.mjs';
import { a as auth } from './auth_DnJXfvn4.mjs';
import { $ as $$AppLayout, b as $$ThemeSwitcher, a as $$TeamItLogo } from './TeamItLogo_COs6I0mQ.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  if (Astro2.locals.user) {
    return Astro2.redirect("/");
  }
  let loginError = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    try {
      const response = await auth.api.signInEmail({
        body: { email, password },
        asResponse: true
      });
      if (response.ok) {
        const authCookies = response.headers.getSetCookie?.();
        const setCookies = authCookies ?? (response.headers.get("set-cookie") ? [response.headers.get("set-cookie")] : []);
        const redirectHeaders = new Headers({ location: "/" });
        for (const cookieStr of setCookies) redirectHeaders.append("set-cookie", cookieStr);
        return new Response(null, { status: 302, headers: redirectHeaders });
      } else {
        loginError = "Email ou mot de passe incorrect.";
      }
    } catch {
      loginError = "Email ou mot de passe incorrect.";
    }
  }
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Connexion — Documentation Team IT", "centered": true, "forceDark": true, "class": "astro-sgpqyurt" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="theme-corner astro-sgpqyurt"> ${renderComponent($$result2, "ThemeSwitcher", $$ThemeSwitcher, { "class": "astro-sgpqyurt" })} </div> <div class="card astro-sgpqyurt"> <div class="logo-wrap astro-sgpqyurt"> <div class="logo-bg astro-sgpqyurt"> ${renderComponent($$result2, "TeamItLogo", $$TeamItLogo, { "height": 40, "class": "astro-sgpqyurt" })} </div> </div> <p class="subtitle astro-sgpqyurt">Documentation</p> ${loginError && renderTemplate`<p class="error-box astro-sgpqyurt" role="alert">${loginError}</p>`} <form method="POST" class="astro-sgpqyurt"> <label class="astro-sgpqyurt">
Email
<input class="app-input astro-sgpqyurt" type="email" name="email" required autocomplete="email"> </label> <label class="astro-sgpqyurt">
Mot de passe
<input class="app-input astro-sgpqyurt" type="password" name="password" required autocomplete="current-password"> </label> <button type="submit" class="btn btn-primary astro-sgpqyurt">Se connecter</button> </form> </div> ` })}`;
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/login.astro", void 0);

const $$file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent } from './astro-component_C__1xnTi.mjs';
import { aV as renderHead, a4 as renderTemplate } from './sequence_DUL7TRkU.mjs';
import { a as auth } from './auth_CPMd3n14.mjs';

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
  return renderTemplate`<html lang="fr" class="astro-sgpqyurt"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Connexion — Documentation Team IT</title>${renderHead()}</head> <body class="astro-sgpqyurt"> <div class="card astro-sgpqyurt"> <h1 class="astro-sgpqyurt">Documentation Team IT</h1> ${loginError && renderTemplate`<p class="error astro-sgpqyurt">${loginError}</p>`} <form method="POST" class="astro-sgpqyurt"> <label class="astro-sgpqyurt">
Email
<input type="email" name="email" required autocomplete="email" class="astro-sgpqyurt"> </label> <label class="astro-sgpqyurt">
Mot de passe
<input type="password" name="password" required autocomplete="current-password" class="astro-sgpqyurt"> </label> <button type="submit" class="astro-sgpqyurt">Se connecter</button> </form> </div> </body></html>`;
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

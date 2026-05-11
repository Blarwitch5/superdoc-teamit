import { c as createComponent } from './astro-component_C__1xnTi.mjs';
import './sequence_DUL7TRkU.mjs';

const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Logout;
  await fetch(`${Astro2.url.origin}/api/auth/sign-out`, {
    method: "POST",
    headers: Astro2.request.headers
  });
  Astro2.response.headers.set(
    "set-cookie",
    "better-auth.session_token=; Max-Age=0; Path=/"
  );
  return Astro2.redirect("/login");
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/logout.astro", void 0);

const $$file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/logout.astro";
const $$url = "/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Logout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

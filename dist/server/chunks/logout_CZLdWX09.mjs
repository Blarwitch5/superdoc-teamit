import { c as createComponent } from './astro-component_Dpsra13u.mjs';
import './sequence_BHhiZ0XQ.mjs';
import { a as auth } from './auth_DnJXfvn4.mjs';

const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Logout;
  const response = await auth.api.signOut({
    headers: Astro2.request.headers,
    asResponse: true
  });
  const redirectHeaders = new Headers({ location: "/login" });
  const setCookies = response.headers.getSetCookie?.() ?? (response.headers.get("set-cookie") ? [response.headers.get("set-cookie")] : []);
  for (const cookie of setCookies) redirectHeaders.append("set-cookie", cookie);
  return new Response(null, { status: 302, headers: redirectHeaders });
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

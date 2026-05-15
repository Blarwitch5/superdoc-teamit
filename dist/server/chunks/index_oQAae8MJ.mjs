import { c as createComponent } from './astro-component_Dpsra13u.mjs';
import { a3 as renderComponent, a4 as renderTemplate } from './sequence_BHhiZ0XQ.mjs';
import { k as getRouteBySlugParam } from './middleware_D_mAfmeZ.mjs';
import { $ as $$Common } from './common_S05VZfTL.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const route = getRouteBySlugParam(Astro2.params.slug);
  if (route === void 0) {
    return new Response(null, { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, {})}`;
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/node_modules/.pnpm/@astrojs+starlight@0.38.4_astro@6.1.10_@types+node@24.12.2_idb-keyval@6.2.2_jiti@2.6.1__6c7dcc7b6e7699c634b5869edc5effa6/node_modules/@astrojs/starlight/routes/ssr/index.astro", void 0);

const $$file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/node_modules/.pnpm/@astrojs+starlight@0.38.4_astro@6.1.10_@types+node@24.12.2_idb-keyval@6.2.2_jiti@2.6.1__6c7dcc7b6e7699c634b5869edc5effa6/node_modules/@astrojs/starlight/routes/ssr/index.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

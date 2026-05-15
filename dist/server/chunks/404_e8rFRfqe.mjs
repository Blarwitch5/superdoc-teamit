import { c as createComponent } from './astro-component_Dpsra13u.mjs';
import { a3 as renderComponent, a4 as renderTemplate } from './sequence_BHhiZ0XQ.mjs';
import { $ as $$Common } from './common_Dhctf8gH.mjs';

const $$404$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, {})}`;
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/node_modules/.pnpm/@astrojs+starlight@0.38.4_astro@6.1.10_@types+node@24.12.2_idb-keyval@6.2.2_jiti@2.6.1__6c7dcc7b6e7699c634b5869edc5effa6/node_modules/@astrojs/starlight/routes/static/404.astro", void 0);

const prerender = false;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "FourOhFour", $$404$1, {})}`;
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/node_modules/.pnpm/@astrojs+starlight@0.38.4_astro@6.1.10_@types+node@24.12.2_idb-keyval@6.2.2_jiti@2.6.1__6c7dcc7b6e7699c634b5869edc5effa6/node_modules/@astrojs/starlight/routes/ssr/404.astro", void 0);

const $$file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/node_modules/.pnpm/@astrojs+starlight@0.38.4_astro@6.1.10_@types+node@24.12.2_idb-keyval@6.2.2_jiti@2.6.1__6c7dcc7b6e7699c634b5869edc5effa6/node_modules/@astrojs/starlight/routes/ssr/404.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

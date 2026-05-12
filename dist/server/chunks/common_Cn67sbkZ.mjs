import { c as createComponent } from './astro-component_C__1xnTi.mjs';
import { a3 as renderComponent, a4 as renderTemplate } from './sequence_DUL7TRkU.mjs';
import { r as renderEntry } from './translations_Bzfg-7-g.mjs';
import { l as getRoute, j as attachRouteDataAndRunMiddleware, m as useRouteData, $ as $$Page } from './middleware_98rRTmN7.mjs';

const $$Common = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Common;
  const route = await getRoute(Astro2);
  const renderResult = await renderEntry(route.entry);
  await attachRouteDataAndRunMiddleware(Astro2, useRouteData(Astro2, route, renderResult));
  const { Content, entry } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, {}, { "default": async ($$result2) => renderTemplate`${Content && renderTemplate`${renderComponent($$result2, "Content", Content, { "frontmatter": entry.data })}`}` })}`;
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/node_modules/.pnpm/@astrojs+starlight@0.38.4_astro@6.1.10_@types+node@24.12.2_idb-keyval@6.2.2_jiti@2.6.1__6c7dcc7b6e7699c634b5869edc5effa6/node_modules/@astrojs/starlight/routes/common.astro", void 0);

export { $$Common as $ };

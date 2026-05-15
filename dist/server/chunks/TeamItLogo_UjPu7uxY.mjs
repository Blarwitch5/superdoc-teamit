import { c as createComponent } from './astro-component_Dpsra13u.mjs';
import { a4 as renderTemplate, aY as addAttribute, a3 as renderComponent, aZ as renderHead, a_ as renderSlot, aW as maybeRenderHead } from './sequence_BHhiZ0XQ.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeInitScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- Run before paint to avoid flash. Place in <head> before any <style>. --><script>\n  (function () {\n    try {\n      var t = localStorage.getItem('starlight-theme') || 'auto';\n      var dark = t === 'dark' || (t === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);\n      document.documentElement.dataset.theme = dark ? 'dark' : 'light';\n    } catch (e) {}\n  })();\n<\/script>"])));
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/components/ThemeInitScript.astro", void 0);

const $$AppLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AppLayout;
  const { title, centered = false, forceDark = false } = Astro2.props;
  return renderTemplate`<html lang="fr"${addAttribute(forceDark ? "dark" : void 0, "data-theme")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${!forceDark && renderTemplate`${renderComponent($$result, "ThemeInitScript", $$ThemeInitScript, {})}`}${renderHead()}</head> <body${addAttribute([{ centered }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/layouts/AppLayout.astro", void 0);

const $$TeamItLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TeamItLogo;
  const { height = 32, "aria-hidden": ariaHidden } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 1900 800" xmlns="http://www.w3.org/2000/svg"${addAttribute(`height: ${height}px; width: auto; display: block;`, "style")}${addAttribute(ariaHidden ? void 0 : "Team IT", "aria-label")}${addAttribute(ariaHidden ? "true" : void 0, "aria-hidden")}${addAttribute(ariaHidden ? void 0 : "img", "role")}> <g transform="matrix(1.18884,0,0,1.18884,-76.5363,17.3005)"> <path d="M195,567.2C195,567.2 267.2,632.4 424.9,628.4C424.9,628.4 330.7,219.1 567.9,9C567.9,9 430.3,112.7 315.8,295.1C267.3,372.4 223,463.6 195,567.2Z" style="fill:rgb(223,49,35);stroke:rgb(223,49,35);stroke-width:1px;fill-rule:nonzero;"></path> </g> <g transform="matrix(1.18884,0,0,1.18884,-76.5363,17.3005)"> <path d="M615.6,563.4C615.6,563.4 516.2,651.8 332,622.3C332,622.3 512.6,312.2 240,113.8C240,113.8 338.7,167.6 446.9,294.2C505,362.1 565.7,450.9 615.6,563.4Z" style="fill:rgb(27,27,24);stroke:rgb(27,27,24);stroke-width:1px;fill-rule:nonzero;"></path> </g> <text x="710" y="510" font-family="system-ui,-apple-system,'Helvetica Neue',Arial,sans-serif" font-weight="700" font-size="290" letter-spacing="-6"> <tspan fill="rgb(27,27,24)">Team </tspan><tspan fill="rgb(223,49,35)">IT</tspan> </text> </svg>`;
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/components/TeamItLogo.astro", void 0);

export { $$AppLayout as $, $$TeamItLogo as a };

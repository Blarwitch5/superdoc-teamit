import { c as createComponent } from './astro-component_C__1xnTi.mjs';
import { a4 as renderTemplate, a3 as renderComponent, aV as renderHead } from './sequence_DUL7TRkU.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<html lang="fr" class="astro-rxoqwbkb"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Admin — Team IT</title><script>
    (function () {
      var RED   = 'rgb(223,49,35)'
      var RED_D = '#c82a18'
      var RED_T = '#9e1f0f'
      var RED_L = '#f48b7e'

      var LIGHT = [
        ':root,',
        '.kui-theme.kui-theme,',
        '.kui-scheme--light.kui-scheme--light,',
        '.kui-scheme--auto.kui-scheme--auto{',
          '--kui-color-scale-indigo1:#fff5f4;',
          '--kui-color-scale-indigo2:#ffedeb;',
          '--kui-color-scale-indigo3:#ffddd9;',
          '--kui-color-scale-indigo4:#ffcac4;',
          '--kui-color-scale-indigo5:#ffb3ab;',
          '--kui-color-scale-indigo6:#f99388;',
          '--kui-color-scale-indigo7:#ef6d62;',
          '--kui-color-scale-indigo8:#e54f44;',
          '--kui-color-scale-indigo9:' + RED + ';',
          '--kui-color-scale-indigo10:' + RED_D + ';',
          '--kui-color-scale-indigo11:' + RED_T + ';',
          '--kui-color-foreground-accent:' + RED_T + ';',
          '--kui-color-border-accent:' + RED + ';',
          '--kui-color-background-accent:#fff5f4;',
          '--kui-color-background-accent-emphasis:' + RED + ';',
          '--kui-color-alias-background-selected:#ffcac4;',
          '--kui-color-alias-border-selected:' + RED + ';',
          '--kui-color-alias-foreground-selected:' + RED_T + ';',
          '--kui-color-alias-border-focused:' + RED + ';',
          '--kui-color-alias-focus-ring:rgba(223,49,35,0.25);',
        '}'
      ].join('')

      var DARK = [
        '.kui-scheme--dark.kui-scheme--dark{',
          '--kui-color-scale-indigo1:#1a0601;',
          '--kui-color-scale-indigo2:#280c04;',
          '--kui-color-scale-indigo3:#3e1209;',
          '--kui-color-scale-indigo4:#51180d;',
          '--kui-color-scale-indigo5:#611e12;',
          '--kui-color-scale-indigo6:#792c1c;',
          '--kui-color-scale-indigo7:#963c2a;',
          '--kui-color-scale-indigo8:#b84f38;',
          '--kui-color-scale-indigo9:' + RED + ';',
          '--kui-color-scale-indigo10:#ea5040;',
          '--kui-color-scale-indigo11:' + RED_L + ';',
          '--kui-color-foreground-accent:' + RED_L + ';',
          '--kui-color-border-accent:#b84f38;',
          '--kui-color-background-accent:#1a0601;',
          '--kui-color-background-accent-emphasis:' + RED + ';',
          '--kui-color-alias-border-selected:#b84f38;',
          '--kui-color-alias-focus-ring:rgba(223,49,35,0.35);',
        '}'
      ].join('')

      var CSS_TEXT = LIGHT + DARK

      // Create our override style tag
      var brandStyle = document.createElement('style')
      brandStyle.id = 'team-it-brand'
      brandStyle.textContent = CSS_TEXT
      document.head.appendChild(brandStyle)

      // Keep our style tag LAST in <head> so it always wins the cascade
      // (Keystatic injects CSS via insertRule on a dynamically created sheet)
      new MutationObserver(function () {
        if (document.head.lastElementChild !== brandStyle) {
          document.head.appendChild(brandStyle)
        }
      }).observe(document.head, { childList: true })
    })()
  <\/script>`, '</head> <body class="astro-rxoqwbkb"> ', " </body></html>"])), renderHead(), renderComponent($$result, "KeystaticApp", null, { "client:only": "react", "client:component-hydration": "only", "class": "astro-rxoqwbkb", "client:component-path": "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/lib/keystatic-app.js", "client:component-export": "KeystaticApp" }));
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/keystatic/[...params].astro", void 0);

const $$file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/keystatic/[...params].astro";
const $$url = "/keystatic/[...params]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

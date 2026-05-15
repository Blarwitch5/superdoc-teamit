import { c as createComponent } from './astro-component_Dpsra13u.mjs';
import { a$ as union, b0 as boolean, b1 as string, b2 as strictObject, b3 as object, b4 as int, b5 as _enum, b6 as record, b7 as number, b8 as never, b9 as _undefined, ba as _null, bb as lazy, bc as date, bd as url, be as custom, a3 as renderComponent, a4 as renderTemplate, a_ as renderSlot, aW as maybeRenderHead, aY as addAttribute, bf as unescapeHTML } from './sequence_BHhiZ0XQ.mjs';
import { I as Icons, a as I18nBadgeConfigSchema, B as BadgeConfigSchema, H as HeadConfigSchema, u as urlToSlug, s as slugToLocaleData, g as getSidebarFromConfig, b as getSidebar, c as getSiteTitle, d as getToC, e as getSiteTitleHref, f as getPrevNextLinks, h as getHead, p as parseAsyncWithFriendlyErrors, i as parseWithFriendlyErrors, j as attachRouteDataAndRunMiddleware, $ as $$Page } from './middleware_DLs7hMEU.mjs';
import { s as stripLeadingAndTrailingSlashes, g as getCollectionPathFromRoot, p as project, c as config } from './translations_BkR_h1WY.mjs';
import { r as renderScript } from './script_T86Sxpel.mjs';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { r as readOrder, g as getCategoryDirs, b as getOrderedFiles, p as parseFrontmatter, D as DOCS_PATH, a as getCategoryLabel } from './content_ChDt9Z8_.mjs';

const PrevNextLinkConfigSchema = () => union([
  boolean(),
  string(),
  strictObject({
    /** The navigation link URL. */
    link: string().optional(),
    /** The navigation link text. */
    label: string().optional()
  })
]).optional();

const defaults = { minHeadingLevel: 2, maxHeadingLevel: 3 };
const TableOfContentsBaseSchema = union([
  object({
    /** The level to start including headings at in the table of contents. Default: 2. */
    minHeadingLevel: int().min(1).max(6).optional().default(2),
    /** The level to stop including headings at in the table of contents. Default: 3. */
    maxHeadingLevel: int().min(1).max(6).optional().default(3)
  }),
  boolean().transform((enabled) => enabled ? defaults : false)
]).refine((toc) => toc ? toc.minHeadingLevel <= toc.maxHeadingLevel : true, {
  error: "minHeadingLevel must be less than or equal to maxHeadingLevel"
});
const FrontmatterTableOfContentsSchema = () => TableOfContentsBaseSchema.optional();

const iconNames = Object.keys(Icons);
const IconSchema = () => _enum(iconNames);

const HeroSchema = ({ image }) => object({
  /**
   * The large title text to show. If not provided, will default to the top-level `title`.
   * Can include HTML.
   */
  title: string().optional(),
  /**
   * A short bit of text about your project.
   * Will be displayed in a smaller size below the title.
   */
  tagline: string().optional(),
  /** The image to use in the hero. You can provide either a relative `file` path or raw `html`. */
  image: union([
    object({
      /** Alt text for screenreaders and other assistive technologies describing your hero image. */
      alt: string().default(""),
      /** Relative path to an image file in your repo, e.g. `../../assets/hero.png`. */
      file: image()
    }),
    object({
      /** Alt text for screenreaders and other assistive technologies describing your hero image. */
      alt: string().default(""),
      /** Relative path to an image file in your repo to use in dark mode, e.g. `../../assets/hero-dark.png`. */
      dark: image(),
      /** Relative path to an image file in your repo to use in light mode, e.g. `../../assets/hero-light.png`. */
      light: image()
    }),
    object({
      /** Raw HTML string instead of an image file. Useful for inline SVGs or more complex hero content. */
      html: string()
    }).transform(({ html }) => ({ html, alt: "" }))
  ]).optional(),
  /** An array of call-to-action links displayed at the bottom of the hero. */
  actions: object({
    /** Text label displayed in the link. */
    text: string(),
    /** Value for the link’s `href` attribute, e.g. `/page` or `https://mysite.com`. */
    link: string(),
    /** Button style to use. One of `primary` (the default), `secondary`, or `minimal`. */
    variant: _enum(["primary", "secondary", "minimal"]).default("primary"),
    /**
     * An optional icon to display alongside the link text.
     * Can be an inline `<svg>` or the name of one of Starlight’s built-in icons.
     */
    icon: union([IconSchema(), string().startsWith("<svg")]).transform((icon) => {
      const parsedIcon = IconSchema().safeParse(icon);
      return parsedIcon.success ? { type: "icon", name: parsedIcon.data } : { type: "raw", html: icon };
    }).optional(),
    /** HTML attributes to add to the link */
    attrs: record(string(), union([string(), number(), boolean()])).optional()
  }).array().default([])
});

const SidebarBaseSchema = object({
  /** The visible label for this item in the sidebar. */
  label: string(),
  /** Translations of the `label` for each supported language. */
  translations: record(string(), string()).default({}),
  /** Adds a badge to the item */
  badge: I18nBadgeConfigSchema()
});
const SidebarGroupSchema = object({
  ...SidebarBaseSchema.shape,
  /**
   * Explicitly prevent custom attributes on groups as the final type for supported sidebar item
   * is a non-discriminated union where TypeScript will not perform excess property checks.
   * This means that a user could define a sidebar group with custom attributes, not getting a
   * TypeScript error, and only have it fail at runtime.
   * @see https://github.com/microsoft/TypeScript/issues/20863
   */
  attrs: never().optional(),
  /** Whether this item should be collapsed by default. */
  collapsed: boolean().default(false)
});
const linkHTMLAttributesSchema = record(
  string(),
  union([string(), number(), boolean(), _undefined(), _null()])
);
const SidebarLinkItemHTMLAttributesSchema = () => linkHTMLAttributesSchema.default({});
const SidebarLinkItemSchema = strictObject({
  ...SidebarBaseSchema.shape,
  /** The link to this item’s content. Can be a relative link to local files or the full URL of an external page. */
  link: string(),
  /** HTML attributes to add to the link item. */
  attrs: SidebarLinkItemHTMLAttributesSchema()
});
const AutoSidebarGroupSchema = strictObject({
  ...SidebarGroupSchema.shape,
  /** Enable autogenerating a sidebar category from a specific docs directory. */
  autogenerate: object({
    /** The directory to generate sidebar items for. */
    directory: string().transform(stripLeadingAndTrailingSlashes),
    /**
     * Whether the autogenerated subgroups should be collapsed by default.
     * Defaults to the `AutoSidebarGroup` `collapsed` value.
     */
    collapsed: boolean().optional(),
    /** HTML attributes to add to the autogenerated link items. */
    attrs: SidebarLinkItemHTMLAttributesSchema()
    // TODO: not supported by Docusaurus but would be good to have
    /** How many directories deep to include from this directory in the sidebar. Default: `Infinity`. */
    // depth: z.number().optional(),
  })
});
const ManualSidebarGroupSchema = strictObject({
  ...SidebarGroupSchema.shape,
  /** Array of links and subcategories to display in this category. */
  items: lazy(
    () => union([
      SidebarLinkItemSchema,
      ManualSidebarGroupSchema,
      AutoSidebarGroupSchema,
      InternalSidebarLinkItemSchema,
      InternalSidebarLinkItemShorthandSchema
    ]).array()
  )
});
const InternalSidebarLinkItemSchema = object({
  ...SidebarBaseSchema.partial({ label: true }).shape,
  /** The link to this item’s content. Must be a slug of a Content Collection entry. */
  slug: string(),
  /** HTML attributes to add to the link item. */
  attrs: SidebarLinkItemHTMLAttributesSchema()
});
const InternalSidebarLinkItemShorthandSchema = string().transform((slug) => InternalSidebarLinkItemSchema.parse({ slug }));
const SidebarItemSchema = union([
  SidebarLinkItemSchema,
  ManualSidebarGroupSchema,
  AutoSidebarGroupSchema,
  InternalSidebarLinkItemSchema,
  InternalSidebarLinkItemShorthandSchema
]);

const StarlightFrontmatterSchema = (context) => object({
  /** The title of the current page. Required. */
  title: string(),
  /**
   * A short description of the current page’s content. Optional, but recommended.
   * A good description is 150–160 characters long and outlines the key content
   * of the page in a clear and engaging way.
   */
  description: string().optional(),
  /**
   * Custom URL where a reader can edit this page.
   * Overrides the `editLink.baseUrl` global config if set.
   *
   * Can also be set to `false` to disable showing an edit link on this page.
   */
  editUrl: union([url(), boolean()]).optional().default(true),
  /** Set custom `<head>` tags just for this page. */
  head: HeadConfigSchema({ source: "content" }),
  /** Override global table of contents configuration for this page. */
  tableOfContents: FrontmatterTableOfContentsSchema(),
  /**
   * Set the layout style for this page.
   * Can be `'doc'` (the default) or `'splash'` for a wider layout without any sidebars.
   */
  template: _enum(["doc", "splash"]).default("doc"),
  /** Display a hero section on this page. */
  hero: HeroSchema(context).optional(),
  /**
   * The last update date of the current page.
   * Overrides the `lastUpdated` global config or the date generated from the Git history.
   */
  lastUpdated: union([date(), boolean()]).optional(),
  /**
   * The previous navigation link configuration.
   * Overrides the `pagination` global config or the link text and/or URL.
   */
  prev: PrevNextLinkConfigSchema(),
  /**
   * The next navigation link configuration.
   * Overrides the `pagination` global config or the link text and/or URL.
   */
  next: PrevNextLinkConfigSchema(),
  sidebar: object({
    /**
     * The order of this page in the navigation.
     * Pages are sorted by this value in ascending order. Then by slug.
     * If not provided, pages will be sorted alphabetically by slug.
     * If two pages have the same order value, they will be sorted alphabetically by slug.
     */
    order: number().optional(),
    /**
     * The label for this page in the navigation.
     * Defaults to the page `title` if not set.
     */
    label: string().optional(),
    /**
     * Prevents this page from being included in autogenerated sidebar groups.
     */
    hidden: boolean().default(false),
    /**
     * Adds a badge to the sidebar link.
     * Can be a string or an object with a variant and text.
     * Variants include 'note', 'tip', 'caution', 'danger', 'success', and 'default'.
     * Passing only a string defaults to the 'default' variant which uses the site accent color.
     */
    badge: BadgeConfigSchema(),
    /** HTML attributes to add to the sidebar link. */
    attrs: SidebarLinkItemHTMLAttributesSchema()
  }).prefault({}),
  /** Display an announcement banner at the top of this page. */
  banner: object({
    /** The content of the banner. Supports HTML syntax. */
    content: string()
  }).optional(),
  /** Pagefind indexing for this page - set to false to disable. */
  pagefind: boolean().default(true),
  /**
   * Indicates that this page is a draft and will not be included in production builds.
   * Note that the page will still be available when running Astro in development mode.
   */
  draft: boolean().default(false)
});
function docsSchema(...args) {
  const [options = {}] = args;
  const { extend } = options;
  return (context) => {
    const UserSchema = typeof extend === "function" ? extend(context) : extend;
    return UserSchema ? StarlightFrontmatterSchema(context).and(UserSchema) : StarlightFrontmatterSchema(context);
  };
}

const StarlightPageFrontmatterSchema = async (context) => {
  const userDocsSchema = await getUserDocsSchema();
  const schema = typeof userDocsSchema === "function" ? userDocsSchema(context) : userDocsSchema;
  return schema.transform((frontmatter) => {
    const { editUrl, sidebar, ...others } = frontmatter;
    const pageEditUrl = editUrl === void 0 || editUrl === true ? false : editUrl;
    return { ...others, editUrl: pageEditUrl };
  });
};
const validateSidebarProp = (sidebarProp) => {
  return parseWithFriendlyErrors(
    SidebarItemSchema.array().optional(),
    sidebarProp,
    "Invalid sidebar prop passed to the `<StarlightPage/>` component."
  );
};
async function generateStarlightPageRouteData({
  props,
  context
}) {
  const { frontmatter, ...routeProps } = props;
  const { url } = context;
  const id = urlToSlug(url);
  const pageFrontmatter = await getStarlightPageFrontmatter(frontmatter);
  const localeData = slugToLocaleData(id);
  const sidebar = props.sidebar ? getSidebarFromConfig(validateSidebarProp(props.sidebar), url.pathname, localeData.locale) : getSidebar(url.pathname, localeData.locale);
  const headings = props.headings ?? [];
  const pageDocsEntry = {
    id,
    body: "",
    collection: "docs",
    filePath: `${getCollectionPathFromRoot("docs", project)}/${stripLeadingAndTrailingSlashes(id)}.md`,
    data: {
      ...pageFrontmatter,
      sidebar: {
        attrs: {},
        hidden: false
      }
    }
  };
  const entry = pageDocsEntry;
  const entryMeta = {
    dir: props.dir ?? localeData.dir,
    lang: props.lang ?? localeData.lang,
    locale: localeData.locale
  };
  const editUrl = pageFrontmatter.editUrl ? new URL(pageFrontmatter.editUrl) : void 0;
  const lastUpdated = pageFrontmatter.lastUpdated instanceof Date ? pageFrontmatter.lastUpdated : void 0;
  const pageProps = {
    ...routeProps,
    ...localeData,
    entry,
    headings,
    locale: localeData.locale
  };
  const siteTitle = getSiteTitle(localeData.lang);
  const routeData = {
    ...routeProps,
    ...localeData,
    id,
    editUrl,
    entry,
    entryMeta,
    hasSidebar: props.hasSidebar ?? entry.data.template !== "splash",
    head: getHead(pageProps, context, siteTitle),
    headings,
    lastUpdated,
    pagination: getPrevNextLinks(sidebar, config.pagination, entry.data),
    sidebar,
    siteTitle,
    siteTitleHref: getSiteTitleHref(localeData.locale),
    toc: getToC(pageProps)
  };
  return routeData;
}
async function getStarlightPageFrontmatter(frontmatter) {
  const schema = await StarlightPageFrontmatterSchema({
    image: (() => (
      // Mock validator for ImageMetadata.
      // https://github.com/withastro/astro/blob/cf993bc263b58502096f00d383266cd179f331af/packages/astro/src/assets/types.ts#L32
      // It uses a custom validation approach because imported SVGs have a type of `function` as
      // well as containing the metadata properties and this ensures we handle those correctly.
      custom(
        (value) => value && (typeof value === "function" || typeof value === "object") && "src" in value && "width" in value && "height" in value && "format" in value,
        "Invalid image passed to `<StarlightPage>` component. Expected imported `ImageMetadata` object."
      )
    ))
  });
  return parseAsyncWithFriendlyErrors(
    schema,
    frontmatter,
    "Invalid frontmatter props passed to the `<StarlightPage/>` component."
  );
}
async function getUserDocsSchema() {
  const userCollections = (await import('./collection-config_BPu6adc7.mjs')).collections;
  return userCollections?.docs?.schema ?? docsSchema();
}

const $$StarlightPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$StarlightPage;
  await attachRouteDataAndRunMiddleware(
    Astro2,
    await generateStarlightPageRouteData({ props: Astro2.props, context: Astro2 })
  );
  return renderTemplate`${renderComponent($$result, "Page", $$Page, {}, { "default": async ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/node_modules/.pnpm/@astrojs+starlight@0.38.4_astro@6.1.10_@types+node@24.12.2_idb-keyval@6.2.2_jiti@2.6.1__6c7dcc7b6e7699c634b5869edc5effa6/node_modules/@astrojs/starlight/components/StarlightPage.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const order = readOrder();
  const dirs = getCategoryDirs(order);
  const ICONS = {
    email: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`,
    administratif: `<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
    installation: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`,
    serveur: `<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>`,
    web: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
    default: `<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>`
  };
  const categories = dirs.flatMap((dir) => {
    const files = getOrderedFiles(dir, order);
    if (!files.length) return [];
    const fiches = files.map((file) => {
      const slug = file.replace(/\.(mdx|md|mdoc)$/, "");
      try {
        const fm = parseFrontmatter(readFileSync(join(DOCS_PATH, dir, file), "utf-8"));
        return { title: fm.title || slug, href: `/${dir}/${slug}/` };
      } catch {
        return { title: slug, href: `/${dir}/${slug}/` };
      }
    });
    return [{
      dir,
      label: getCategoryLabel(dir),
      icon: ICONS[dir] ?? ICONS.default,
      fiches
    }];
  });
  const totalFiches = categories.reduce((sum, c) => sum + c.fiches.length, 0);
  return renderTemplate`${renderComponent($$result, "StarlightPage", $$StarlightPage, { "frontmatter": {
    title: "Accueil",
    description: "Base de connaissances interne Team IT — fiches de process et guides techniques."
  }, "class": "astro-j7pv25f6" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="home astro-j7pv25f6"> <!-- Hero --> <div class="hero astro-j7pv25f6"> <h1 class="hero-title astro-j7pv25f6">Base de connaissances <span class="accent astro-j7pv25f6">Team IT</span></h1> <p class="hero-desc astro-j7pv25f6">
Procédures, guides et fiches techniques pour l'équipe IT. <br class="astro-j7pv25f6"> <strong class="astro-j7pv25f6">${totalFiches} fiches</strong> réparties en <strong class="astro-j7pv25f6">${categories.length} catégories</strong>.
</p> </div> <!-- Category grid --> <div class="grid astro-j7pv25f6"> ${categories.map((cat, i) => renderTemplate`<div class="card astro-j7pv25f6"${addAttribute(i >= 2 && i % 2 === 1 ? "margin-top:1.5rem" : void 0, "style")}> <div class="card-head astro-j7pv25f6"> <span class="card-icon astro-j7pv25f6" aria-hidden="true"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="astro-j7pv25f6">${unescapeHTML(cat.icon)}</svg> </span> <span class="card-title astro-j7pv25f6">${cat.label}</span> <span class="card-count astro-j7pv25f6">${cat.fiches.length}</span> </div> <ul class="card-list astro-j7pv25f6"> ${cat.fiches.slice(0, 3).map((f) => renderTemplate`<li class="astro-j7pv25f6"> <a${addAttribute(f.href, "href")} class="astro-j7pv25f6">${f.title}</a> </li>`)} </ul> ${cat.fiches.length > 3 && renderTemplate`<button class="card-more astro-j7pv25f6"${addAttribute(cat.label, "data-expand-cat")} type="button">
+${cat.fiches.length - 3} autres fiches →
</button>`} </div>`)} </div> ${renderScript($$result2, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </div> ` })}`;
}, "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/index.astro", void 0);

const $$file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

const index___astro = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	page
}, Symbol.toStringTag, { value: 'Module' }));

export { docsSchema as d, index___astro as i };

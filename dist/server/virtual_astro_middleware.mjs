import { $ as defineMiddleware, aQ as AstroUserError, aa as sequence } from './chunks/sequence_DUL7TRkU.mjs';
import { a as auth } from './chunks/auth_CPMd3n14.mjs';
import { u as useTranslations } from './chunks/translations_Bzfg-7-g.mjs';

const PUBLIC_PATHS = ["/login", "/api/auth"];
const onRequest$2 = defineMiddleware(async (context, next) => {
  const pathname = new URL(context.request.url).pathname;
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    context.locals.user = null;
    context.locals.session = null;
    return next();
  }
  if (!pathname.endsWith("/") && !pathname.startsWith("/api/") && !pathname.startsWith("/keystatic") && !/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return context.redirect(pathname + "/", 301);
  }
  const session = await auth.api.getSession({ headers: context.request.headers });
  if (!session) {
    if (pathname.startsWith("/api/")) {
      return new Response(JSON.stringify({ error: "Non autorisé" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    return context.redirect("/login");
  }
  context.locals.user = session.user;
  context.locals.session = session.session;
  return next();
});

const onRequest$1 = defineMiddleware(async (context, next) => {
  context.locals.t = useTranslations(context.currentLocale);
  initializeStarlightRoute(context);
  return next();
});
function initializeStarlightRoute(context) {
  if ("starlightRoute" in context.locals) return;
  const state = { routeData: void 0 };
  Object.defineProperty(context.locals, "starlightRoute", {
    get() {
      if (!state.routeData) {
        throw new AstroUserError(
          "`locals.starlightRoute` is not defined",
          "This usually means a component that accesses `locals.starlightRoute` is being rendered outside of a Starlight page, which is not supported.\n\nIf this is a component you authored, you can do one of the following:\n\n1. Avoid using this component in non-Starlight pages.\n2. Wrap the code that reads `locals.starlightRoute` in a  `try/catch` block and handle the cases where `starlightRoute` is not available.\n\nIf this is a Starlight built-in or third-party component, you may need to report a bug or avoid this use of the component."
        );
      }
      return state.routeData;
    },
    set(routeData) {
      state.routeData = routeData;
    }
  });
}

const onRequest = sequence(
	onRequest$1,
	onRequest$2
	
);

export { onRequest };

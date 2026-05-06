import { defineMiddleware } from 'astro:middleware'
import { auth } from './lib/auth'

const PUBLIC_PATHS = ['/login', '/api/auth']

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = new URL(context.request.url).pathname

  if (PUBLIC_PATHS.some(path => pathname.startsWith(path))) {
    context.locals.user = null
    context.locals.session = null
    return next()
  }

  // Redirect to trailing slash so Starlight resolves index pages correctly
  // (e.g. /web → /web/). Skip API routes and static file paths.
  if (!pathname.endsWith('/') && !pathname.startsWith('/api/') && !pathname.startsWith('/keystatic') && !/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return context.redirect(pathname + '/', 301)
  }

  const session = await auth.api.getSession({ headers: context.request.headers })

  if (!session) {
    if (pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'Non autorisé' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }
    return context.redirect('/login')
  }

  context.locals.user = session.user
  context.locals.session = session.session
  return next()
})

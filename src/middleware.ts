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

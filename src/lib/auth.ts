import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from './db'

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: 'sqlite' }),
  emailAndPassword: { enabled: true },
  secret:  import.meta.env.AUTH_SECRET,
  baseURL: import.meta.env.SITE_URL ?? 'http://localhost:4321',
})

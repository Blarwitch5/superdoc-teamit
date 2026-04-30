import { betterAuth } from 'better-auth'
import { SqliteDialect } from 'kysely'
import Database from 'better-sqlite3'

const env = (key: string) =>
  (typeof import.meta !== 'undefined' && import.meta.env?.[key]) ?? process.env[key]

const sqlite = new Database('./auth.db')

export const auth = betterAuth({
  database: {
    dialect: new SqliteDialect({ database: sqlite }),
    type: 'sqlite',
  },
  emailAndPassword: { enabled: true },
  secret: env('AUTH_SECRET'),
  baseURL: env('SITE_URL') ?? 'http://localhost:4321',
})

/**
 * Crée les tables Better Auth dans auth.db si elles n'existent pas.
 * Usage : pnpm tsx scripts/setup-db.ts
 */
import Database from 'better-sqlite3'
import { join } from 'node:path'

const db = new Database(join(process.cwd(), 'auth.db'))

db.exec(`
  CREATE TABLE IF NOT EXISTS "user" (
    "id"            TEXT PRIMARY KEY NOT NULL,
    "name"          TEXT NOT NULL,
    "email"         TEXT NOT NULL,
    "emailVerified" INTEGER NOT NULL DEFAULT 0,
    "image"         TEXT,
    "createdAt"     INTEGER NOT NULL,
    "updatedAt"     INTEGER NOT NULL
  );
  CREATE UNIQUE INDEX IF NOT EXISTS "user_email_unique" ON "user" ("email");

  CREATE TABLE IF NOT EXISTS "session" (
    "id"          TEXT PRIMARY KEY NOT NULL,
    "expiresAt"   INTEGER NOT NULL,
    "token"       TEXT NOT NULL,
    "createdAt"   INTEGER NOT NULL,
    "updatedAt"   INTEGER NOT NULL,
    "ipAddress"   TEXT,
    "userAgent"   TEXT,
    "userId"      TEXT NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE
  );
  CREATE UNIQUE INDEX IF NOT EXISTS "session_token_unique" ON "session" ("token");

  CREATE TABLE IF NOT EXISTS "account" (
    "id"                     TEXT PRIMARY KEY NOT NULL,
    "accountId"              TEXT NOT NULL,
    "providerId"             TEXT NOT NULL,
    "userId"                 TEXT NOT NULL,
    "accessToken"            TEXT,
    "refreshToken"           TEXT,
    "idToken"                TEXT,
    "accessTokenExpiresAt"   INTEGER,
    "refreshTokenExpiresAt"  INTEGER,
    "scope"                  TEXT,
    "password"               TEXT,
    "createdAt"              INTEGER NOT NULL,
    "updatedAt"              INTEGER NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS "verification" (
    "id"         TEXT PRIMARY KEY NOT NULL,
    "identifier" TEXT NOT NULL,
    "value"      TEXT NOT NULL,
    "expiresAt"  INTEGER NOT NULL,
    "createdAt"  INTEGER,
    "updatedAt"  INTEGER
  );
`)

console.log('Tables créées avec succès.')
db.close()

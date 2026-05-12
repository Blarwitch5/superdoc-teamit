import { betterAuth } from 'better-auth';
import { SqliteDialect } from 'kysely';
import Database from 'better-sqlite3';
import { join } from 'node:path';

const env = (key) => process.env[key];
const dbPath = join(process.cwd(), "auth.db");
const sqlite = new Database(dbPath);
const auth = betterAuth({
  database: {
    dialect: new SqliteDialect({ database: sqlite }),
    type: "sqlite"
  },
  emailAndPassword: { enabled: true },
  secret: env("AUTH_SECRET"),
  baseURL: env("SITE_URL") ?? "http://localhost:4321"
});

export { auth as a };

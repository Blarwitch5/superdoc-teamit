import { betterAuth } from 'better-auth';
import { SqliteDialect } from 'kysely';
import Database from 'better-sqlite3';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://superdoc.team-it.ch", "SSR": true};
const env = (key) => (typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__, { AUTH_SECRET: "40334893bd261fea9c3ef378b8072c81891d26dececb3a0b85a25f26e0a821a7", SITE_URL: "https://superdoc.team-it.ch" })?.[key]) ?? process.env[key];
const sqlite = new Database("./auth.db");
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

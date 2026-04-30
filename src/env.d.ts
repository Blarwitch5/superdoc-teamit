/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type SessionUser = {
  id: string
  name: string
  email: string
}

type UserSession = {
  id: string
  userId: string
  expiresAt: Date
}

declare namespace App {
  interface Locals {
    user: SessionUser | null
    session: UserSession | null
  }
}

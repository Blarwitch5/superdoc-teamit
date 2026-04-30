# Design Spec — teamit-superdoc

**Date** : 2026-04-30
**Statut** : Validé

---

## Contexte

Site de documentation interne pour les employés de Team IT (solutions informatiques, Suisse). Remplace `teamit-doc`. Objectif : permettre à des non-développeurs d'ajouter et modifier des fiches de process sans passer par un développeur, tout en gardant une trace automatique de qui a créé ou modifié chaque fiche.

---

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | Astro 5 + Starlight |
| Style | Tailwind CSS v4 (`@tailwindcss/vite`) |
| CMS admin | Keystatic |
| Auth | Better Auth |
| Base de données | SQLite (comptes utilisateurs uniquement) |
| Rendu | SSR via `@astrojs/node` |
| Process manager | PM2 |
| Hébergement | Infomaniak (VPS/Cloud Server) |
| Langue | Français uniquement |

---

## Architecture

Un seul service Node.js, un seul déploiement. Pas de service séparé.

```
teamit-superdoc/
├── src/
│   ├── content/
│   │   └── docs/                    ← fichiers .md générés par Keystatic
│   │       ├── web/
│   │       ├── administratif/
│   │       ├── installation/
│   │       ├── email/
│   │       └── serveur/
│   ├── pages/
│   │   ├── login.astro              ← page de connexion
│   │   └── api/
│   │       ├── auth/[...all].ts     ← endpoints Better Auth
│   ├── middleware.ts                ← protection de toutes les routes
│   └── styles/
│       ├── theme.css                ← tokens de design (@theme)
│       └── global.css
├── keystatic.config.ts              ← schéma des formulaires CMS
├── auth.db                          ← SQLite (comptes uniquement)
├── astro.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Sécurité — deux couches

### Couche 1 : Serveur (Nginx)

Restriction par IP : seul le réseau interne de l'entreprise peut atteindre le site. Les employés en télétravail passent par VPN. Configuré dans le virtual host Nginx — aucun code Astro impliqué.

```nginx
location / {
    allow 192.168.1.0/24;  # réseau interne
    deny all;
}
```

### Couche 2 : Application (Astro middleware)

Toutes les routes (lecture et admin) exigent une session valide. Le middleware vérifie la session à chaque requête. Sans session → redirection vers `/login`.

```
Visiteur → Nginx (vérif. IP) → Astro middleware (vérif. session) → page
```

Routes publiques (hors protection session) : `/login` uniquement.

---

## Authentification

**Système** : Better Auth avec adapter SQLite/Drizzle.

**Comptes** : créés par un développeur via un script CLI (`pnpm run create-user`). Les employés reçoivent leur email + mot de passe initial par email. Aucune interface UI de gestion des comptes — le dev gère ça en ligne de commande.

**Flux de connexion** :
1. Employé accède à n'importe quelle URL → redirigé vers `/login`
2. Saisit email + mot de passe
3. Session créée → accès à la doc
4. Accès à `/keystatic` → interface d'édition (visible pour tous les comptes connectés)

**Données stockées** : email, mot de passe (hashé bcrypt), nom complet, date de création du compte.

---

## CMS — Keystatic

Interface admin accessible à `/keystatic`. Les éditeurs y accèdent via leur navigateur après connexion. Aucune installation côté éditeur.

### Collection : `fiches`

Champs du formulaire :

| Champ | Type | Détail |
|---|---|---|
| `title` | Texte | Titre de la fiche (requis) |
| `category` | Liste déroulante | web, administratif, installation, email, serveur |
| `subcategory` | Texte | Sous-catégorie libre |
| `description` | Texte court | Résumé affiché dans la sidebar Starlight |
| `content` | Éditeur visuel | Titres, listes, code, images, URL vidéo |
| `image` | Upload fichier | Stocké dans `src/assets/docs/` |
| `videoUrl` | URL (optionnel) | YouTube privé, Vimeo, Microsoft Stream |

Champs injectés automatiquement depuis la session (invisibles dans le formulaire) :

| Champ | Valeur |
|---|---|
| `createdBy` | Nom complet de l'utilisateur connecté |
| `createdAt` | Date ISO au moment de la création |
| `modifiedBy` | Nom complet de l'utilisateur connecté |
| `modifiedAt` | Date ISO au moment de la modification |

### Frontmatter généré

```yaml
---
title: Déploiement FTP
description: Process de mise en ligne via FTP
category: web
subcategory: Déploiement
createdBy: Marie Dupont
createdAt: 2026-04-30
modifiedBy: Jean Martin
modifiedAt: 2026-05-12
---
```

---

## Structure du contenu

Arborescence Starlight générée automatiquement depuis les répertoires :

```
src/content/docs/
├── web/
│   ├── index.md
│   └── deploiement/
│       └── deploiement-ftp.md
├── administratif/
│   └── index.md
├── installation/
│   └── index.md
├── email/
│   └── index.md
└── serveur/
    └── index.md
```

La sidebar Starlight est autogénérée via `autogenerate: { directory: 'web' }` etc. dans `astro.config.ts`. Pas de configuration manuelle nécessaire quand une nouvelle fiche est ajoutée.

---

## Design

- Thème Starlight par défaut, personnalisé avec les couleurs et la police de l'entreprise via les tokens CSS Starlight (`--sl-color-accent`, etc.)
- Logo fourni par le client → remplace le titre dans la navbar
- Tailwind pour tout style custom au-delà du thème Starlight
- Aucun emoji dans l'interface
- Icônes via `@lucide/astro` si besoin de composants custom

---

## Affichage des métadonnées sur les fiches

En bas de chaque fiche de process, un composant affiche :

```
Créé par Marie Dupont le 30 avril 2026
Dernière modification par Jean Martin le 12 mai 2026
```

Rendu via un composant Starlight custom (`src/components/FicheFooter.astro`) injecté dans le layout via la config Starlight `components.Footer`.

---

## Déploiement sur Infomaniak

- Astro tourne en SSR avec `@astrojs/node` (mode `standalone`)
- PM2 gère le processus Node.js (`pm2 start dist/server/entry.mjs`)
- Nginx fait le proxy vers le port Node.js et applique la restriction IP
- Mise à jour du site : `git pull && pnpm install && pnpm build && pm2 restart superdoc`

---

## Hors périmètre

- Internationalisation (français uniquement)
- Recherche avancée (Starlight inclut Pagefind nativement)
- Notifications email lors de modifications
- Versioning des fiches / historique de modifications
- Niveaux de permissions différenciés entre éditeurs

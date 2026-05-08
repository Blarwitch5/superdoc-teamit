# Déploiement — teamit-superdoc

Site de documentation interne Team IT.  
Stack : Astro SSR · Starlight · Keystatic · Better Auth · SQLite · PM2 · Nginx

---

## Prérequis serveur

Testé sur Ubuntu 22.04 / 24.04 (Infomaniak VPS).

```bash
# Node.js 22 via NodeSource
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

# pnpm
npm install -g pnpm

# PM2
npm install -g pm2

# Nginx + Certbot
sudo apt install -y nginx certbot python3-certbot-nginx
```

---

## Première installation

### 1. Cloner le dépôt

```bash
git clone <url-du-depot> /var/www/teamit-superdoc
cd /var/www/teamit-superdoc
```

### 2. Configurer les variables d'environnement

```bash
cp .env.example .env
nano .env
```

Contenu de `.env` :

```env
# Générer avec : node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
AUTH_SECRET=<clé-aléatoire-64-caractères-hex>

SITE_URL=https://superdoc.team-it.ch
```

### 3. Installer et builder

```bash
pnpm install --frozen-lockfile
pnpm build
```

### 4. Démarrer avec PM2

```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
# → copier-coller la commande sudo affichée pour activer le démarrage automatique au boot
```

Vérifier :

```bash
pm2 status
curl http://127.0.0.1:4321   # doit retourner du HTML
```

### 5. Créer le premier compte utilisateur

```bash
pnpm create-user "Prénom Nom" prenom.nom@team-it.ch motdepasse
```

---

## Configuration Nginx + SSL

### 1. Certificat Let's Encrypt

Le port 80 doit être joignable depuis internet pour la validation ACME.  
Désactiver temporairement l'IP whitelist si elle est déjà active.

```bash
sudo certbot certonly --nginx -d superdoc.team-it.ch
```

### 2. Installer la config Nginx

```bash
sudo cp /var/www/teamit-superdoc/docs/nginx.conf /etc/nginx/sites-available/teamit-superdoc

# Remplacer 192.168.1.0/24 par le CIDR du réseau interne réel
sudo nano /etc/nginx/sites-available/teamit-superdoc

sudo ln -s /etc/nginx/sites-available/teamit-superdoc /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 3. Renouvellement automatique

Certbot installe un timer systemd. Vérifier :

```bash
sudo certbot renew --dry-run
```

---

## Mettre à jour le code (nouvelles versions)

```bash
cd /var/www/teamit-superdoc
git pull
pnpm install --frozen-lockfile
pnpm build
pm2 reload teamit-superdoc
```

---

## Publier du contenu après édition Keystatic

Keystatic sauvegarde les fiches dans `src/content/docs/`. Astro compile le contenu au build — un rebuild est nécessaire pour que les nouvelles routes soient actives.

```bash
cd /var/www/teamit-superdoc
pnpm publish
# = pnpm build + pm2 reload (~15–20 secondes, zéro downtime)
```

---

## Ajouter un compte utilisateur

```bash
cd /var/www/teamit-superdoc
pnpm create-user "Prénom Nom" prenom.nom@team-it.ch motdepasse
```

---

## Commandes PM2

```bash
pm2 status                   # état des processus
pm2 logs teamit-superdoc     # logs en temps réel
pm2 reload teamit-superdoc   # rechargement gracieux (zéro downtime)
pm2 restart teamit-superdoc  # redémarrage complet
```

---

## Fichiers persistants (ne pas supprimer ni écraser)

| Fichier | Contenu |
|---|---|
| `auth.db` | Comptes utilisateurs (SQLite, non versionné) |
| `.env` | Variables d'environnement (non versionné) |
| `src/content/docs/` | Toutes les fiches MDX |

---

## Structure du répertoire de déploiement

```
/var/www/teamit-superdoc/
├── dist/                  ← build compilé (regénéré par pnpm build)
├── src/content/docs/      ← fiches MDX éditées via Keystatic
├── auth.db                ← base de données utilisateurs (persistante)
├── .env                   ← secrets (non versionné)
└── ecosystem.config.cjs   ← config PM2
```

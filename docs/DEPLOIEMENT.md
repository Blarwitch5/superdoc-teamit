# Déploiement sur Infomaniak

## Prérequis

- Node.js 20+ installé
- pnpm installé (`npm install -g pnpm`)
- PM2 installé (`npm install -g pm2`)
- Nginx configuré

## Première installation

```bash
git clone <repo-url> /var/www/teamit-superdoc
cd /var/www/teamit-superdoc
pnpm install
cp .env.example .env
# Éditer .env : remplacer AUTH_SECRET (générer avec node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
# Éditer .env : mettre SITE_URL=https://doc.team-it.ch
pnpm build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

## Nginx

```bash
cp docs/nginx.conf /etc/nginx/sites-available/teamit-superdoc
# Éditer : remplacer 192.168.1.0/24 par le CIDR du réseau interne de l'entreprise
ln -s /etc/nginx/sites-available/teamit-superdoc /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

## Créer un compte utilisateur

```bash
cd /var/www/teamit-superdoc
pnpm create-user "Prénom Nom" email@team-it.ch motdepasse
```

## Mettre à jour le site

```bash
cd /var/www/teamit-superdoc
git pull
pnpm install
pnpm build
pm2 restart teamit-superdoc
```

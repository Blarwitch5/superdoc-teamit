# Gestion des utilisateurs — superdoc.team-it.ch

La création de comptes est **réservée à l'administrateur** et se fait uniquement en ligne de commande sur le serveur. Il n'existe pas d'interface publique d'inscription.

---

## Créer un utilisateur

Se connecter au serveur Infomaniak (SSH), puis depuis le dossier du projet :

```bash
cd /srv/customer/sites/superdoc.team-it.ch
/srv/customer/.npm-global/bin/pnpm create-user "Prénom Nom" email@team-it.ch motdepasse
```

**Règles :**
- Le mot de passe doit contenir au moins 8 caractères.
- L'email doit être unique (une erreur s'affiche si le compte existe déjà).

**Exemple :**
```bash
/srv/customer/.npm-global/bin/pnpm create-user "Marie Dupont" marie.dupont@team-it.ch Sup3rS3cret!
```

---

## Changer le mot de passe

Chaque utilisateur peut changer son propre mot de passe une fois connecté :

1. Se connecter sur `https://superdoc.team-it.ch/login`
2. Cliquer sur **Mon compte** dans la barre de navigation (ou aller sur `/change-password`)
3. Saisir le mot de passe actuel et le nouveau mot de passe (min. 8 caractères)

---

## Réinitialiser le mot de passe (oubli)

Pas d'envoi d'email automatique. Procédure manuelle :

1. Supprimer le compte concerné en base de données (voir ci-dessous)
2. Recréer le compte avec un nouveau mot de passe via la commande CLI
3. Communiquer le nouveau mot de passe à l'utilisateur par un canal sécurisé

### Accès direct à la base SQLite

```bash
cd /srv/customer/sites/superdoc.team-it.ch
sqlite3 auth.db

-- Lister les utilisateurs
SELECT id, name, email, createdAt FROM user;

-- Supprimer un utilisateur
DELETE FROM user WHERE email = 'email@team-it.ch';

.quit
```

---

## Notes

- La base de données est stockée dans `auth.db` à la racine du projet.
- L'inscription publique est désactivée — toute tentative via l'API retourne une erreur 403.
- Il n'y a pas de rôles : tout utilisateur créé a accès à l'ensemble de la documentation et aux fonctions d'édition.

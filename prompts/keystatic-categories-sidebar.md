# Prompt — Catégories dynamiques + ordre sidebar dans Keystatic

> Prompt destiné à Claude Code. Copier intégralement le bloc ci-dessous.

---

## Variables d'environnement à exporter avant de lancer Claude Code

```bash
export CLAUDE_CODE_DISABLE_1M_CONTEXT=1
export CLAUDE_AUTOCOMPACT_PCT_OVERRIDE=80
```

(ou en une ligne : `CLAUDE_CODE_DISABLE_1M_CONTEXT=1 CLAUDE_AUTOCOMPACT_PCT_OVERRIDE=80 claude`)

---

<role>
Tu es un développeur senior Astro + Starlight + Keystatic.
Tu travailles dans le dépôt `teamit-superdoc` (Astro 5, Starlight, Keystatic core 0.5.50, React 19, pnpm).
Règle absolue : tu n'inventes ni API, ni champ, ni comportement Keystatic.
Si tu n'es pas certain qu'une fonctionnalité existe dans Keystatic 0.5.50, tu l'écris explicitement (« Incertain — à vérifier dans la doc/le code »), tu proposes une alternative connue, et tu attends confirmation avant d'implémenter cette partie.
</role>

<contexte_projet>
Fichiers de référence (à lire AVANT d'écrire du code) :
- `keystatic.config.tsx` — collection `fiches` actuelle, catégories codées en dur dans un `fields.select`, slug à deux segments (`<categorie>/<slug-fiche>`), `path: 'src/content/docs/*/*'`.
- `astro.config.ts` — fonction `buildSidebar()` qui scanne `src/content/docs/` et génère la sidebar Starlight via `autogenerate: { directory: name }`. Mapping FR via `CATEGORY_LABELS`.
- `src/content/docs/` — chaque sous-dossier de premier niveau = une catégorie = une section de sidebar.
- `src/pages/api/keystatic/[...params].ts` — handler Keystatic custom (injection d'auteur).

Stack confirmée : Astro 5 + `@astrojs/starlight` + Keystatic `0.5.50` + React 19 + Tailwind v4 + pnpm.
</contexte_projet>

<objectifs>
1. **Slug auto-préfixé par la catégorie**
   - Dans Keystatic, l'utilisateur ne saisit QUE le slug court de la fiche (ex. `deploiement-npm`).
   - Le slug final stocké/utilisé doit être `<categorie>/<slug-fiche>` (ex. `web/deploiement-npm`).
   - Le premier segment doit toujours correspondre à la catégorie sélectionnée.
   - Si la catégorie change, le slug doit refléter la nouvelle catégorie sans intervention manuelle de l'utilisateur.

2. **Création d'une nouvelle catégorie depuis Keystatic**
   - Le champ `category` ne doit plus être un `select` figé.
   - L'utilisateur doit pouvoir choisir une catégorie existante OU en créer une nouvelle (saisie libre + slugification automatique).
   - Si nouvelle catégorie :
     - Le slug de la fiche devient `<nouvelle-cat-slugifiee>/<slug-fiche>`.
     - Un nouveau dossier `src/content/docs/<nouvelle-cat-slugifiee>/` est créé au moment de l'enregistrement de la fiche (par la création du fichier markdoc dans ce chemin — ne pas créer un dossier vide à part).
     - La sidebar doit afficher automatiquement un nouveau dropdown pour cette catégorie au prochain build/dev (la fonction `buildSidebar()` le fait déjà via le scan du FS — vérifier que le label FR fonctionne pour une catégorie inconnue).
   - Si catégorie existante : la fiche est ajoutée dans le dossier correspondant, sans créer de doublon.

3. **Ordre d'affichage dans la sidebar, pilotable depuis Keystatic**
   - Ajouter un mécanisme permettant de définir :
     a) L'ordre des catégories (sections) entre elles.
     b) L'ordre des fiches à l'intérieur d'une catégorie.
   - L'ordre doit être lisible par `astro.config.ts` au moment du build (sidebar Starlight).
   - Proposer une approche **certaine** parmi celles-ci, en justifiant le choix :
     - (a) Champ `order: fields.integer(...)` dans le schéma `fiches` + tri dans `buildSidebar()` en construisant la sidebar manuellement (plus `autogenerate`, mais `items` explicites avec slugs).
     - (b) Une `singleton` Keystatic `sidebarOrder` stockant un tableau ordonné de catégories (et éventuellement un tableau ordonné de slugs de fiches par catégorie).
     - (c) Combinaison des deux : singleton pour l'ordre des catégories, champ `order` numérique sur la fiche pour l'ordre intra-catégorie.
   - Recommandation attendue : choisir l'option la plus simple à maintenir, et expliquer le compromis.
   - **Important** : si la sidebar n'est plus 100 % auto-générée, conserver un *fallback* : une catégorie absente du `singleton` doit quand même apparaître (en fin de liste, ordre alphabétique).

4. **Question conceptuelle à traiter en fin de réponse**
   L'utilisateur demande pourquoi, dans l'UI Keystatic, on voit « Collections » avec la liste des entrées dessous, et s'il serait possible d'afficher à la place les **catégories** comme niveau intermédiaire, avec un **drag & drop** pour décider de l'ordre exact dans la sidebar.
   - Expliquer en 5–10 lignes le modèle Keystatic : `collections` ≠ catégories ; une collection = un schéma + un dossier ; les entrées sont listées à plat ; il n'y a pas de notion native de « groupe » ou de « catégorie » dans la liste de la collection.
   - Indiquer **clairement** si Keystatic 0.5.50 offre un drag & drop natif pour réordonner des entrées d'une collection.
     - Si tu n'es pas certain : écris « Incertain — à vérifier ». NE PAS INVENTER.
   - Proposer 1 ou 2 alternatives réalistes (ex. singleton avec un champ `array` réorderable via `fields.array` qui supporte le drag & drop dans l'UI Keystatic — à vérifier sur la doc 0.5.50).
</objectifs>

<contraintes>
- TypeScript strict. Pas d'`any` non justifié.
- Conserver le style du repo : `type` plutôt que `interface`, kebab-case pour les dossiers, named exports.
- Ne pas casser le handler Keystatic custom (`src/pages/api/keystatic/[...params].ts`).
- Ne pas casser la génération bilingue prévue (FR root + EN `/en/`) : si tu touches au scan FS, prendre en compte un éventuel sous-dossier `en/`.
- Slugification des noms de catégorie : minuscules, accents retirés, espaces → `-`, caractères spéciaux retirés. Utiliser une fonction utilitaire dédiée (proposer une implémentation, pas de dépendance lourde).
- Compatibilité avec `path: 'src/content/docs/*/*'` (deux niveaux). Si tu changes le path, justifier et lister tous les impacts.
- Aucun changement de version de package sans justification.
</contraintes>

<etapes_attendues>
1. **Lire** `keystatic.config.tsx`, `astro.config.ts`, et lister le contenu actuel de `src/content/docs/`.
2. **Vérifier** dans `node_modules/@keystatic/core/dist/keystatic-core.d.ts` :
   - L'existence de `fields.array` et ses options (drag & drop, `itemLabel`).
   - L'existence d'un mécanisme natif pour un select « avec saisie libre ». Si absent, proposer une combinaison `select` + `text` conditionnel, OU un simple `text` slugifié + suggestions, en l'expliquant.
   - Si une option `slugify` ou `transform` existe pour `fields.slug`. Sinon, expliquer comment forcer le préfixe catégorie.
   Pour chaque vérification : citer le symbole exact trouvé (ou écrire « Non trouvé dans 0.5.50 »).
3. **Proposer** un plan d'implémentation détaillé AVANT d'écrire du code, avec :
   - Diff conceptuel de `keystatic.config.tsx`.
   - Diff conceptuel de `astro.config.ts` (`buildSidebar` enrichi).
   - Nouveau(x) fichier(s) éventuel(s) (singleton Keystatic, helpers).
   - Liste des incertitudes restantes.
4. **Attendre** mon « ok » avant d'écrire le code, sauf si tu juges qu'une partie est triviale et 100 % certaine — dans ce cas, l'indiquer.
5. **Implémenter** par petits commits logiques, en exécutant `pnpm build` (ou au minimum `pnpm astro check`) après chaque étape majeure et en rapportant le résultat.
6. **Tester** manuellement le flux : créer une fiche dans une catégorie existante, créer une fiche dans une nouvelle catégorie, vérifier la sidebar, vérifier le slug stocké dans le frontmatter et le chemin du fichier.
</etapes_attendues>

<format_reponse>
1. **Synthèse de lecture** (ce que tu as trouvé dans le code et la doc/types Keystatic).
2. **Vérifications API Keystatic** (liste claire de ✔ certain / ⚠ incertain).
3. **Plan détaillé** (avant tout code).
4. **Implémentation** (uniquement après mon « ok », ou pour les parties triviales annoncées).
5. **Réponse à la question conceptuelle** sur l'organisation des collections dans Keystatic et le drag & drop des catégories.
6. **Limites & incertitudes restantes**.
</format_reponse>

<rappel_final>
- Si une fonctionnalité n'existe pas en Keystatic 0.5.50 : dis-le. Ne fabrique pas une API.
- Si tu hésites entre deux approches : présente-les, recommande-en une, et explique pourquoi.
- Priorité : exactitude > complétude > élégance.
</rappel_final>

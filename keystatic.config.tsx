import { config, fields, collection } from '@keystatic/core'

function BrandMark(_props: { colorScheme: 'light' | 'dark' }) {
  return (
    <a
      href="/"
      title="Retour à la documentation"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: 12,
        color: 'inherit',
        opacity: 0.6,
        textDecoration: 'none',
        padding: '2px 6px',
        border: '1px solid currentColor',
        borderRadius: 4,
      }}
    >
      ← Docs
    </a>
  )
}

export default config({
  storage: { kind: 'local' },
  ui: {
    brand: {
      name: 'Team IT Docs',
      mark: BrandMark,
    }
  },
  collections: {
    fiches: collection({
      label: 'Fiches de process',
      slugField: 'title',
      path: 'src/content/docs/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Titre' },
          slug: {
            label: 'Identifiant (slug)',
            description: 'OBLIGATOIRE : deux segments séparés par /  —  ex: web/deploiement-npm  ou  serveur/reset-mdp. Le premier segment doit correspondre à la catégorie choisie ci-dessus. Un slug sans / bloquera la sauvegarde.'
          }
        }),
        description: fields.text({
          label: 'Description',
          description: 'Résumé court affiché dans la sidebar.'
        }),
        category: fields.text({
          label: 'Catégorie',
          description: 'En minuscules, sans espaces ni accents — ex : web, serveur, administratif. Crée automatiquement une nouvelle section dans la sidebar si elle n\'existe pas encore.',
          validation: { isRequired: true, length: { min: 1 } },
        }),
        subcategory: fields.text({
          label: 'Sous-catégorie',
          description: 'Ex : Déploiement, Configuration, Sauvegarde…'
        }),
        image: fields.image({
          label: 'Image principale (optionnel)',
          directory: 'src/assets/docs',
          publicPath: '../../assets/docs/'
        }),
        videoUrl: fields.url({
          label: 'URL vidéo (optionnel)',
          description: 'YouTube non-listé, Vimeo, Microsoft Stream…'
        }),
        createdBy:  fields.text({ label: 'Créé par',    defaultValue: '', validation: { isRequired: false }, description: 'Auto-rempli à la sauvegarde — ne pas modifier.' }),
        createdAt:  fields.text({ label: 'Créé le',     defaultValue: '', validation: { isRequired: false }, description: 'Auto-rempli à la sauvegarde — ne pas modifier.' }),
        modifiedBy: fields.text({ label: 'Modifié par', defaultValue: '', validation: { isRequired: false }, description: 'Auto-rempli à la sauvegarde — ne pas modifier.' }),
        modifiedAt: fields.text({ label: 'Modifié le',  defaultValue: '', validation: { isRequired: false }, description: 'Auto-rempli à la sauvegarde — ne pas modifier.' }),
        content: fields.mdx({ label: 'Contenu' })
      }
    })
  }
})

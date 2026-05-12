import { config, fields, collection } from '@keystatic/core'

function BrandMark(_props: { colorScheme: 'light' | 'dark' }) {
  const linkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: 12,
    color: 'inherit',
    opacity: 0.6,
    textDecoration: 'none',
    padding: '2px 6px',
    border: '1px solid currentColor',
    borderRadius: 4,
  }
  return <a href="/admin" title="Retour à l'administration" style={linkStyle}>← Admin</a>
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
            label: 'Chemin (catégorie/identifiant)',
            description: 'Doit commencer par la catégorie — ex : web/deploiement-npm · serveur/reset-mdp · test/ma-fiche',
          }
        }),
        description: fields.text({
          label: 'Description',
          description: 'Résumé court affiché dans la sidebar.'
        }),
        category: fields.text({
          label: 'Catégorie (legacy)',
          description: 'Valeur héritée — le chemin du slug fait foi. Laisser vide pour les nouvelles fiches.',
          validation: { isRequired: false },
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

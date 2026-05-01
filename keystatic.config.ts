import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Team IT Docs' } },
  collections: {
    fiches: collection({
      label: 'Fiches de process',
      slugField: 'title',
      path: 'src/content/docs/*/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titre' } }),
        description: fields.text({
          label: 'Description',
          description: 'Résumé court affiché dans la sidebar.'
        }),
        category: fields.select({
          label: 'Catégorie',
          options: [
            { label: 'Web',           value: 'web' },
            { label: 'Administratif', value: 'administratif' },
            { label: 'Installation',  value: 'installation' },
            { label: 'Email',         value: 'email' },
            { label: 'Serveur',       value: 'serveur' },
          ],
          defaultValue: 'web'
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
        createdBy:  fields.text({ label: 'Créé par',    validation: { isRequired: false } }),
        createdAt:  fields.text({ label: 'Créé le',     validation: { isRequired: false } }),
        modifiedBy: fields.text({ label: 'Modifié par', validation: { isRequired: false } }),
        modifiedAt: fields.text({ label: 'Modifié le',  validation: { isRequired: false } }),
        content: fields.markdoc({ label: 'Contenu' })
      }
    })
  }
})

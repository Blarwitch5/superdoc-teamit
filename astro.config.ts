import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite'
import keystatic from '@keystatic/astro'

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    starlight({
      title: 'Documentation Team IT',
      social: [],
      logo: {
        light: './src/assets/logo-light.svg',
        dark:  './src/assets/logo-dark.svg',
        replacesTitle: true
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'Français', lang: 'fr' }
      },
      customCss: ['./src/styles/global.css'],
      components: {
        Footer:      './src/components/FicheFooter.astro',
        SocialIcons: './src/components/HeaderNav.astro',
      },
      sidebar: [
        { label: 'Web',           autogenerate: { directory: 'web' } },
        { label: 'Administratif', autogenerate: { directory: 'administratif' } },
        { label: 'Installation',  autogenerate: { directory: 'installation' } },
        { label: 'Email',         autogenerate: { directory: 'email' } },
        { label: 'Serveur',       autogenerate: { directory: 'serveur' } },
      ],
    }),
    keystatic()
  ]
})

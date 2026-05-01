import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite'
import { mkdirSync, writeFileSync } from 'node:fs'

/**
 * Custom Keystatic integration that only injects the UI route.
 * The API route (/api/keystatic/[...params]) is handled by our own
 * src/pages/api/keystatic/[...params].ts which adds session-based
 * author injection before forwarding to makeHandler.
 */
function keystaticWithCustomApi() {
  return {
    name: 'keystatic',
    hooks: {
      'astro:config:setup': ({ injectRoute, updateConfig, config }: any) => {
        updateConfig({
          server: config.server.host ? {} : { host: '127.0.0.1' },
          vite: {
            plugins: [{
              name: 'keystatic',
              resolveId(id: string) {
                if (id === 'virtual:keystatic-config') {
                  return this.resolve('./keystatic.config', './a')
                }
                return null
              }
            }],
            optimizeDeps: {
              entries: ['keystatic.config.*', '.astro/keystatic-imports.js']
            }
          }
        })
        const dotAstroDir = new URL('./.astro/', config.root)
        mkdirSync(dotAstroDir, { recursive: true })
        writeFileSync(
          new URL('keystatic-imports.js', dotAstroDir),
          `import "@keystatic/astro/ui";\nimport "@keystatic/astro/api";\nimport "@keystatic/core/ui";\n`
        )
        // UI route only — API route is our own file-based route
        injectRoute({
          entrypoint: '@keystatic/astro/internal/keystatic-astro-page.astro',
          pattern: '/keystatic/[...params]',
          prerender: false
        })
      }
    }
  }
}

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
    keystaticWithCustomApi()
  ]
})

import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import node from '@astrojs/node'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import { mkdirSync, writeFileSync } from 'node:fs'

/**
 * Custom Keystatic integration that only injects the UI route.
 * The API route (/api/keystatic/[...params]) is handled by our own
 * src/pages/api/keystatic/[...params].ts, which adds session-based
 * author injection before forwarding to makeHandler.
 */
function keystaticWithCustomApi() {
  return {
    name: 'keystatic',
    hooks: {
      'astro:config:setup': ({ updateConfig, config }: any) => {
        updateConfig({
          server: config.server.host ? {} : { host: '127.0.0.1' },
          vite: {
            plugins: [{
              name: 'keystatic',
              resolveId(id: string) {
                if (id === 'virtual:keystatic-config') {
                  return this.resolve('./keystatic.config.tsx', './a')
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
      }
    }
  }
}

export default defineConfig({
  site: 'https://superdoc.team-it.ch',
  output: 'server',
  security: { checkOrigin: false },
  trailingSlash: 'ignore',
  adapter: node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
  integrations: [
    react(),
    starlight({
      prerender: false,
      title: 'Documentation Team IT',
      favicon: '/favicon.svg',
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
        Search:      './src/components/Search.astro',
        Sidebar:     './src/components/DynamicSidebar.astro',
        PageSidebar:      './src/components/EditPageSidebar.astro',
        MobileMenuFooter: './src/components/MobileMenuFooter.astro',
      },
      // Sidebar is fully managed at runtime by DynamicSidebar.astro
      sidebar: [],
    }),
    mdx(),
    keystaticWithCustomApi(),
  ]
})

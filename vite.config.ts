import { fileURLToPath, URL } from 'node:url'

import basicSsl from '@vitejs/plugin-basic-ssl'

import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { IconsPluginCustom } from './vite.config.icons'
import { ComponentsBuilder } from './vite.config.components'
import { ImportsBuilder } from './vite.config.imports'

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const port = env.VITE_PORT ? parseInt(env.VITE_PORT, 10) : 3000
  const host = env.VITE_HOST || 'localhost'

  return {
    server: {
      host,
      port,
      https: false
    },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
          cleanupOutdatedCaches: true
        }
      }),
      vue(),
      basicSsl(),
      visualizer({
        open: true
      }),
      IconsPluginCustom(),
      ComponentsBuilder(),
      ImportsBuilder()
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        colors: fileURLToPath(new URL('./tailwind/tailwind.colors.cjs', import.meta.url))
      }
    },

    optimizeDeps: {
      include: ['colors']
    }
  }
})

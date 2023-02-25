import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa"
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: false
  },
  base: '/',
  plugins: [react(), VitePWA({

    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    },
    manifest: {
      name: 'ColorSiphon',
      short_name: 'Siphon',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      lang: 'en',
      scope: '/',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
      theme_color: '#16A2F3',
    },
  })],
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  build: {
    // chunkSizeWarningLimit: 5000,
  },
  optimizeDeps: {
    // exclude: ['vuetify'],
    entries: [
      './src/**/*.vue',
    ],
  },
})

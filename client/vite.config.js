import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {
      APP_MODE: 'dev',
      BACKEND_URL: 'http://localhost:8080/api',
      // BACKEND_URL: 'https://tfu-server.onrender.com/',
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }, 
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

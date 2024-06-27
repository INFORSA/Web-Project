import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://api.inforsa-unmul.org',
    },
  },
  build: {
    outDir: 'dist',
  },
})

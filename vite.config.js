import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://qkrmjmws-8000.asse.devtunnels.ms',
    },
  },
  build: {
    outDir: 'dist',
  },
})

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  server: {
    proxy: {
      '/uploads': 'http://localhost:5000',
    },
  },
  plugins: [
    tailwindcss(),
  ],
})
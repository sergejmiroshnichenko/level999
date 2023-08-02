import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      types: '/src/types',
      routes: '/src/routes',
      stores: '/src/store',
      pages: '/src/pages'
    },
  },
})

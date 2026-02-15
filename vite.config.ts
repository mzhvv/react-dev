// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { alias } from './vite.aliases'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: alias,
  },
  build: {
    rollupOptions: {
      external: [
        /\/__experience__\//,
        /\/-experience__\//,
        // /\/-experience\//,
        /\/__example__\//,
        /\/-example__\//,
        // /\/-example\//,
      ],
    },
  },
})

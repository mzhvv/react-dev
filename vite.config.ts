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
})

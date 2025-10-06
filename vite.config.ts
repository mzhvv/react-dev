// vite.config.ts

import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@react-dev': resolve(__dirname, './src/apps/react-dev'),

      '@apps': resolve(__dirname, './src/apps'),

      '@navigation': resolve(__dirname, './src/apps/navigation-accumulate.ts'),
      '@router': resolve(__dirname, './src/libs/router'),

      '@ui': path.resolve(__dirname, './src/ui'),

      '@': path.resolve(__dirname, './src'),
    },
  },
})

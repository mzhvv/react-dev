// vite.config.ts

import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@global': resolve(__dirname, './src/react-dev/shared/global'),
      '@react-dev': resolve(__dirname, './src/react-dev'),
      '@apps': resolve(__dirname, './src/apps'),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@': path.resolve(__dirname, './src'),
    },
  },
})

// vitest.config.ts

/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { alias } from './vite.aliases'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__test__/setup.ts'],
  },
  resolve: {
    alias: alias,
  },
})

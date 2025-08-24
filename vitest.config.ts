// vitest.config.ts

import { defineConfig } from 'vitest/config'
import path from 'path'

// import { fileURLToPath } from 'node:url'
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
// const dirname =
//   typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['src/**/*.test.disabled.{ts,tsx}'],

    // You are using a frozen webkit browser which does not receive updates anymore on mac11. Please update to the latest version of your operating system to test up-to-date browsers.
    // projects: [
    //   {
    //     extends: true,
    //     plugins: [
    //       storybookTest({
    //         configDir: path.join(dirname, '.storybook'),
    //       }),
    //     ],
    //     test: {
    //       name: 'storybook',
    //       browser: {
    //         enabled: true,
    //         headless: true,
    //         provider: 'playwright',
    //         instances: [
    //           {
    //             browser: 'chromium',
    //           },
    //         ],
    //       },
    //       setupFiles: ['.storybook/vitest.setup.ts'],
    //     },
    //   },
    // ],
  },
})

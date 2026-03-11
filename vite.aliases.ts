// vite.aliases.ts

import { resolve } from 'path'
import type { AliasOptions } from 'vite'

export const alias = {
  '@ui': resolve(__dirname, './src/ui'),

  '@mzhvv': resolve(__dirname, './src/packages/@mzhvv'),
  '@packages': resolve(__dirname, './src/packages'),

  '@core': resolve(__dirname, './src/core'),
  '@business': resolve(__dirname, './src/business'),

  '@home': resolve(__dirname, './src/apps/home'),
  '@template-app': resolve(__dirname, './src/apps/@mzhvv/template-app'),
  '@examples': resolve(__dirname, './src/apps/@mzhvv/examples'),
  '@accumulator': resolve(__dirname, './src/apps/__accumulator__'),
  '@apps': resolve(__dirname, './src/apps'),

  '@aggregator': resolve(__dirname, './src/main/__aggregator__'),
  '@main': resolve(__dirname, './src/main'),

  '@': resolve(__dirname, './src'),

  '@public': resolve(__dirname, './public'),
} as const satisfies AliasOptions

// vite.aliases.ts

import { resolve } from 'path'
import type { AliasOptions } from 'vite'

export const alias = {
  '@mzhvv': resolve(__dirname, './src/packages/@mzhvv'),
  '@packages': resolve(__dirname, './src/packages'),

  '@business': resolve(__dirname, './src/core/business'),
  '@core': resolve(__dirname, './src/core'),

  '@ui': resolve(__dirname, './src/ui'),

  '@template-app': resolve(__dirname, './src/apps/@mzhvv/template-app'),
  '@accumulator': resolve(__dirname, './src/apps/__accumulator__'),
  '@apps': resolve(__dirname, './src/apps'),

  '@aggregator': resolve(__dirname, './src/main/__aggregator__'),
  '@main': resolve(__dirname, './src/main'),

  '@': resolve(__dirname, './src'),

  '@public': resolve(__dirname, './public'),
} as const satisfies AliasOptions

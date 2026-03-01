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
  '@accumulators': resolve(__dirname, './src/apps/__accumulators__'),
  '@apps': resolve(__dirname, './src/apps'),

  '@aggregators': resolve(__dirname, './src/main/__aggregators__'),
  '@main': resolve(__dirname, './src/main'),

  '@': resolve(__dirname, './src'),

  '@public': resolve(__dirname, './public'),
} as const satisfies AliasOptions

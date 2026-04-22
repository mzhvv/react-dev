// vite.aliases.ts

import { resolve } from 'path'
import type { AliasOptions } from 'vite'

export const alias = {
  // #region apps

  '@examples': resolve(__dirname, './src/apps/@mzhvv/examples'),
  '@ui': resolve(__dirname, './src/apps/@mzhvv/ui'),

  '@home': resolve(__dirname, './src/apps/home'),
  '@documentation': resolve(__dirname, './src/apps/documentation'),

  // #endregion

  // #region packages

  '@template-app': resolve(__dirname, './src/packages/@mzhvv/framework/template-app'),
  '@mzhvv': resolve(__dirname, './src/packages/@mzhvv'),
  '@packages': resolve(__dirname, './src/packages'),

  // #endregion

  // #region required @mzhvv/framework

  '@core': resolve(__dirname, './src/core'),
  '@business': resolve(__dirname, './src/business'),
  '@accumulator': resolve(__dirname, './src/apps/__accumulator__'),
  '@apps': resolve(__dirname, './src/apps'),
  '@aggregator': resolve(__dirname, './src/main/__aggregator__'),
  '@main': resolve(__dirname, './src/main'),
  '@': resolve(__dirname, './src'),
  '@public': resolve(__dirname, './public'),

  // #endregion
} as const satisfies AliasOptions

// vite.aliases.ts

import { resolve } from 'path'
import type { AliasOptions } from 'vite'

export const alias = {
  // #region apps(microfrontends)

  '@home': resolve(__dirname, './src/apps/home'),
  '@documentation': resolve(__dirname, './src/apps/documentation'),
  '@examples': resolve(__dirname, './src/apps/examples'),
  '@ui': resolve(__dirname, './src/apps/ui'),

  // #endregion

  // #region required packages(@mzhvv)/framework

  '@template-app': resolve(__dirname, './src/packages/framework/template-app'),
  '@packages': resolve(__dirname, './src/packages'),
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

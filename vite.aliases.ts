// vite.aliases.ts

import { resolve } from 'path'
import type { AliasOptions } from 'vite'

export const alias = {
  '@public': resolve(__dirname, './public'),

  '@core/features': resolve(__dirname, './src/core/features'),
  '@core/libs': resolve(__dirname, './src/core/shared/libs'),
  '@core/utils': resolve(__dirname, './src/core/shared/utils'),
  '@core/types': resolve(__dirname, './src/core/types'),
  '@core': resolve(__dirname, './src/core'),

  '@react-dev/aggregator': resolve(__dirname, './src/react-dev/__aggregator__'),
  '@react-dev': resolve(__dirname, './src/react-dev'),

  '@template-app': resolve(__dirname, './src/apps/__template-app__'),
  '@template-app-experience': resolve(__dirname, './src/apps/__template-app-experience__'),
  '@apps/accumulators': resolve(__dirname, './src/apps/__accumulators__'),
  '@apps': resolve(__dirname, './src/apps'),

  '@ui': resolve(__dirname, './src/ui'),

  '@': resolve(__dirname, './src'),
} as const satisfies AliasOptions

// vite.aliases.ts

import path from 'path'
import type { AliasOptions } from 'vite'

export const alias = {
  '@public': path.resolve(__dirname, './public'),

  // core
  '@libs': path.resolve(__dirname, './src/core/shared/libs'),
  '@utils': path.resolve(__dirname, './src/core/shared/utils'),
  '@core': path.resolve(__dirname, './src/core'),

  // react-dev
  '@aggregator': path.resolve(__dirname, 'src/react-dev/__aggregator__'),
  '@react-dev': path.resolve(__dirname, './src/react-dev'),

  // apps
  '@template-app': path.resolve(__dirname, './src/apps/__template-app__'),
  '@accumulators': path.resolve(__dirname, 'src/apps/__accumulators__'),
  '@apps': path.resolve(__dirname, './src/apps'),

  '@ui': path.resolve(__dirname, './src/ui'),

  '@': path.resolve(__dirname, './src'),
} as const satisfies AliasOptions

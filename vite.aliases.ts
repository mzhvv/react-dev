// vite.aliases.ts

import path from 'path'
import type { AliasOptions } from 'vite'

export const alias = {
  '@public': path.resolve(__dirname, './public'),

  // src
  '@libs': path.resolve(__dirname, './src/core/shared/libs'),
  '@utils': path.resolve(__dirname, './src/core/shared/utils'),
  '@core': path.resolve(__dirname, './src/core'),

  '@ui': path.resolve(__dirname, './src/ui'),

  '@react-dev': path.resolve(__dirname, './src/react-dev'),

  '@template-app': path.resolve(__dirname, './src/apps/__template-app__'),
  '@apps': path.resolve(__dirname, './src/apps'),

  // service
  '@accumulators': path.resolve(__dirname, 'src/apps/__accumulators__'),
  '@aggregator': path.resolve(__dirname, 'src/react-dev/__aggregator__'),

  '@': path.resolve(__dirname, './src'),
} as const satisfies AliasOptions

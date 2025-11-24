// vite.aliases.ts

import path from 'path'
import type { AliasOptions } from 'vite'

export const alias = {
  // root
  '@public': path.resolve(__dirname, './public'),

  // src
  '@core': path.resolve(__dirname, './src/core'),
  '@libs': path.resolve(__dirname, './src/core/shared/libs'),
  '@utils': path.resolve(__dirname, './src/core/shared/utils'),

  '@apps': path.resolve(__dirname, './src/apps'),
  '@react-dev': path.resolve(__dirname, './src/react-dev'),
  '@ui': path.resolve(__dirname, './src/ui'),
  '@': path.resolve(__dirname, './src'),

  // service
  '@accumulators': path.resolve(__dirname, 'src/apps/__accumulators__'),
  '@aggregator': path.resolve(__dirname, 'src/react-dev/__aggregator__'),
} as const satisfies AliasOptions

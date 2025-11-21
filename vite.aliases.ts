// vite.aliases.ts

import path from 'path'
import type { AliasOptions } from 'vite'

export const alias = {
  '@global': path.resolve(__dirname, './src/react-dev/__global__'),
  '@accumulators': path.resolve(__dirname, 'src/apps/__accumulators__'),

  '@apps': path.resolve(__dirname, './src/apps'),
  '@react-dev': path.resolve(__dirname, './src/react-dev'),
  '@ui': path.resolve(__dirname, './src/ui'),

  '@': path.resolve(__dirname, './src'),
  '@public': path.relative(__dirname, './public'),
} as const satisfies AliasOptions

// vite.aliases.ts

import path from 'path'
import type { AliasOptions } from 'vite'

export const alias = {
  '@global': path.resolve(__dirname, './src/react-dev/shared/global'),
  '@factories': path.resolve(__dirname, './src/react-dev/shared/libs/factories'),
  '@styles': path.resolve(__dirname, './src/react-dev/shared/styles/index.ts'),
  '@ui': path.resolve(__dirname, './src/ui'),

  '@react-dev': path.resolve(__dirname, './src/react-dev'),
  '@apps': path.resolve(__dirname, './src/apps'),

  '@': path.resolve(__dirname, './src'),

  '@public': path.relative(__dirname, './public'),
} as const satisfies AliasOptions

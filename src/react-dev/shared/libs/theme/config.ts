// src/react-dev/shared/libs/theme/config.ts

import type { ThemeConfig } from './types'

export const themeConfig = {
  storageKey: 'vite-ui-theme',
  defaultTheme: 'system' as const,
  colorStorageKey: 'vite-ui-color',
  defaultColor: 'blue' as const,
} satisfies ThemeConfig

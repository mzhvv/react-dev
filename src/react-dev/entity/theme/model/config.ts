// src/react-dev/entity/theme/model/config.ts

import type { Color, Mode, ThemeConfig } from '../types'

export const themeConfig = {
  defaultMode: 'system',
  modeStorageKey: 'theme-mode',

  defaultColor: 'blue',
  colorStorageKey: 'theme-color',
} as const satisfies ThemeConfig

export const modes = ['system', 'light', 'dark'] as const satisfies Mode[]
export const colors = ['neutral', 'blue'] as const satisfies Color[]

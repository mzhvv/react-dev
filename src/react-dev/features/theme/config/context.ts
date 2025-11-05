// src/react-dev/features/theme/config/context.ts

import { createContext } from 'react'

import type { Theme } from '../types'
import { colors, modes, themeConfig } from './config'

export const ThemeProviderContext = createContext<Theme>({
  themeMode: {
    mode: themeConfig.defaultMode,
    setMode: () => null,
    modes: modes,
  },

  themeColor: {
    color: themeConfig.defaultColor,
    setColor: () => null,
    colors: colors,
  },
})

// src/react-dev/shared/libs/theme/model/context.ts

import { createContext } from 'react'

import type { Theme } from '../types'
import { colors, modes, themeConfig } from './config'

export const ThemeProviderContext = createContext<Theme>({
  modes: modes,
  mode: themeConfig.defaultMode,
  setMode: () => null,

  colors: colors,
  color: themeConfig.defaultColor,
  setColor: () => null,
})

// src/core/features/theme/lib/use-theme.ts

import { useContext } from 'react'
import { ThemeProviderContext } from '../config/context'
import type { Theme, ThemeUi } from '../types'

export function useTheme(): Theme {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error('useThemeState must be used within a ThemeProvider')

  return context
}

/** Подготовленные данные я использование в UI */
export function useThemeUi(): ThemeUi {
  const { themeMode: themeModeDefault, themeColor: themeColorDefault } = useTheme()

  const themeMode = {
    state: {
      value: themeModeDefault.mode,
      onValueChange: themeModeDefault.setMode,
    },
    options: themeModeDefault.modes,
  }

  const themeColor = {
    state: {
      value: themeColorDefault.color,
      onValueChange: themeColorDefault.setColor,
    },
    options: themeColorDefault.colors,
  }

  return {
    themeMode,
    themeColor,
  }
}

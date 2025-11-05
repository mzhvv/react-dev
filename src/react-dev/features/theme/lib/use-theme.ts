// src/react-dev/features/theme/lib/use-theme.ts

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
  const { themeMode, themeColor } = useTheme()

  const themeModeUi = {
    state: {
      value: themeMode.mode,
      onValueChange: themeMode.setMode,
    },
    options: themeMode.modes,
  }

  const themeColorUi = {
    state: {
      value: themeColor.color,
      onValueChange: themeColor.setColor,
    },
    options: themeColor.colors,
  }

  return {
    themeModeUi,
    themeColorUi,
  }
}

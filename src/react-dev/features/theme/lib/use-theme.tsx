// src/react-dev/features/theme/lib/use-theme.tsx

import { useContext } from 'react'
import { ThemeProviderContext } from '../config/context'
import type { Theme } from '../types'

export function useTheme(): Theme {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error('useThemeState must be used within a ThemeProvider')

  return context
}

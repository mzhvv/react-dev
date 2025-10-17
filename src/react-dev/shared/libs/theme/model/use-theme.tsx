// src/react-dev/shared/libs/theme/model/use-theme-state.tsx

import { useContext } from 'react'
import { ThemeProviderContext } from './context'

export function useTheme() {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error('useThemeState must be used within a ThemeProvider')

  return context
}

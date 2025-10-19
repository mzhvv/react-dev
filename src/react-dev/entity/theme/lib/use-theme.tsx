// src/react-dev/entity/theme/lib/use-theme.tsx

import { useContext } from 'react'
import { ThemeProviderContext } from '../model/context'

export function useTheme() {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error('useThemeState must be used within a ThemeProvider')

  return context
}

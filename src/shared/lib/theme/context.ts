import { createContext } from 'react'

export type Theme = 'dark' | 'light' | 'system'

export type ThemeContextState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextState | undefined>(undefined)

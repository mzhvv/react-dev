// src/react-dev/shared/libs/theme/context.ts

import { createContext } from 'react'

import type { Color, Theme } from './types'

export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  color: Color
  setColor: (color: Color) => void
}

export const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: 'system',
  setTheme: () => null,
  color: 'blue',
  setColor: () => null,
})

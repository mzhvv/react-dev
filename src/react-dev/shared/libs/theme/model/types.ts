// src/react-dev/shared/libs/theme/model/types.ts

export type Mode = 'dark' | 'light' | 'system'
export type Color = 'neutral' | 'blue'

export type ThemeConfig = {
  defaultMode: Mode
  modeStorageKey: 'theme-mode'

  defaultColor: Color
  colorStorageKey: 'theme-color'
}

export type Theme = {
  modes: Mode[]
  mode: Mode
  setMode: (theme: Mode) => void

  colors: Color[]
  color: Color
  setColor: (color: Color) => void
}

// src/react-dev/entity/theme/types.ts

// model

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

// constants

export type ModeOptionMap<T> = Record<Mode, { value: Mode } & T>
export type ColorOptionMap<T> = Record<Color, { value: Color } & T>

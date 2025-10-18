// src/react-dev/shared/libs/theme/types.ts

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

// ui

export type ModeRadioGroupProps = {
  options: Theme['modes']
  value: Theme['mode']
  onValueChange: Theme['setMode']
}

export type ColorRadioGroupProps = {
  options: Theme['colors']
  value: Theme['color']
  onValueChange: Theme['setColor']
}

// constants

export type ModeOptionMap<T> = Record<Mode, { value: Mode } & T>
export type ColorOptionMap<T> = Record<Color, { value: Color } & T>

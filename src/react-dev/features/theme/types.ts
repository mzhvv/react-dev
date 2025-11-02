// src/react-dev/features/theme/types.ts

import type { ImageProps } from '@ui/components/image'

export type Mode = 'dark' | 'light' | 'system'
export type Color = 'neutral' | 'blue'

export type ThemeConfig = {
  defaultMode: Mode
  modeStorageKey: 'theme-mode'

  defaultColor: Color
  colorStorageKey: 'theme-color'
}

export type ThemeColor = {
  themeColor: { colors: Color[]; color: Color; setColor: (color: Color) => void }
}
export type ThemeMode = {
  themeMode: {
    modes: Mode[]
    mode: Mode
    setMode: (theme: Mode) => void
  }
}

export type Theme = ThemeMode & ThemeColor

// constants / DATA

export type ModeOption = {
  value: Mode
  label: string
  title: string
  ariaLabel?: string
} & ImageProps

export type ThemeModeData = {
  legend: string
  optionMap: Record<Mode, ModeOption>
}

export type ThemeConstants = {
  heading: string
  mode: ThemeModeData
}

export type ColorOptionMap<T> = Record<Color, { value: Color } & T>

// ui

export type ColorRadioGroupProps = {
  options: Theme['themeColor']['colors']
  value: Theme['themeColor']['color']
  onValueChange: Theme['themeColor']['setColor']
}

export type ModeRadioGroupProps = {
  state: {
    value: Theme['themeMode']['mode']
    onValueChange: Theme['themeMode']['setMode']
  }
  options: Theme['themeMode']['modes']
  CONSTANTS: ThemeModeData['optionMap']
}

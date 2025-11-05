// src/react-dev/features/theme/types.ts

import type { ImageProps } from '@ui/components/image'

export type Color = 'neutral' | 'blue'
export type Mode = 'dark' | 'light' | 'system'

export type ThemeConfig = {
  defaultColor: Color
  colorStorageKey: 'theme-color'

  defaultMode: Mode
  modeStorageKey: 'theme-mode'
}

// useTheme

export type ThemeColor = {
  themeColor: { color: Color; setColor: (color: Color) => void; colors: Color[] }
}
export type ThemeMode = {
  themeMode: { mode: Mode; setMode: (theme: Mode) => void; modes: Mode[] }
}
export type Theme = ThemeMode & ThemeColor

// useThemeUI

export type ThemeColorUi = {
  themeColorUi: { state: { value: Color; onValueChange: (color: Color) => void }; options: Color[] }
}
export type ThemeModeUi = {
  themeModeUi: { state: { value: Mode; onValueChange: (theme: Mode) => void }; options: Mode[] }
}
export type ThemeUi = ThemeModeUi & ThemeColorUi

// constants

export type ThemeSharedConstants = {
  heading: string
}

export type ThemeColorConstants = {
  legend: string
  optionMap: Record<
    Color,
    {
      value: Color
      label: string
      specialLabel: string
    }
  >
}

export type ThemeModeConstants = {
  legend: string
  optionMap: Record<
    Mode,
    {
      value: Mode
      label: string
      title: string
      ariaLabel?: string
    } & ImageProps
  >
}

export type ThemeConstants = {
  theme: ThemeSharedConstants
  color: ThemeColorConstants
  mode: ThemeModeConstants
}

// ui

export type ColorRadioGroupProps = ThemeColorUi & {
  CONSTANTS: ThemeColorConstants['optionMap']
}
export type ModeRadioGroupProps = ThemeModeUi & {
  CONSTANTS: ThemeModeConstants['optionMap']
}

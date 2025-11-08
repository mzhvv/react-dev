// src/react-dev/features/theme/types.ts

// theme config

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
  color: Color
  setColor: (value: Color) => void
  colors: Color[]
}
export type ThemeMode = {
  mode: Mode
  setMode: (value: Mode) => void
  modes: Mode[]
}
export type Theme = {
  themeColor: ThemeColor
  themeMode: ThemeMode
}

// useThemeUI

export type ThemeColorUi = {
  state: { value: Color; onValueChange: (value: Color) => void }
  options: Color[]
}
export type ThemeModeUi = {
  state: { value: Mode; onValueChange: (value: Mode) => void }
  options: Mode[]
}
export type ThemeUi = {
  themeColor: ThemeColorUi
  themeMode: ThemeModeUi
}

// constants

import type { ImageProps } from '@ui/components/image'

export type ThemeConstant = {
  themeSection: { id: string; heading: string }
}

export type ThemeColorConstant = {
  themeColorSection: { id: string; heading: string }
  themeColorGroup: { ariaLabel: string }
  themeColorGroupItemMap: Record<
    Color,
    {
      value: Color
      label: string
      title: string
      ariaLabel: string
    }
  >
}

export type ThemeModeConstant = {
  themeModeSection: { id: string; heading: string }
  themeModeGroup: { ariaLabel: string }
  themeModeGroupItemMap: Record<
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
  THEME: ThemeConstant
  COLOR: ThemeColorConstant
  MODE: ThemeModeConstant
}

// ui

import type { StyleProps } from '@styles'

export type ThemeColorSectionProps<T> = T & {
  themeColor: ThemeColorUi
  CONSTANTS: ThemeColorConstant
  style: StyleProps
}

export interface ThemeColorRadioGroupProps {
  themeColor: ThemeColorUi
  CONSTANTS: Pick<ThemeColorConstant, 'themeColorGroup' | 'themeColorGroupItemMap'>
  style: Pick<StyleProps, 'COLOR_MAP'>
}

export type ThemeModeSectionProps<T> = T & {
  themeMode: ThemeModeUi
  CONSTANTS: ThemeModeConstant
}

export interface ThemeModeRadioGroupProps {
  themeMode: ThemeModeUi
  CONSTANTS: Pick<ThemeModeConstant, 'themeModeGroup' | 'themeModeGroupItemMap'>
}

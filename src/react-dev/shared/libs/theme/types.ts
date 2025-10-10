// src/react-dev/shared/libs/theme/types.ts

export type Theme = 'dark' | 'light' | 'system'
export type Color = 'neutral' | 'blue'

type ThemeStorageKey = 'vite-ui-theme'
type ColorStorageKey = 'vite-ui-color'

export type ThemeConfig = {
  themeStorageKey: ThemeStorageKey
  defaultTheme: Theme
  colorStorageKey: ColorStorageKey
  defaultColor: Color
}

// ui

export type ColorOption = { value: Color; label: string }
export type ThemeOption = { value: Theme; label: string; image: string }

export type ColorRadioGroupProps = {
  options: ColorOption[]
  color: Color
  onColorChange: (value: string) => void
}

export type ThemeRadioGroupProps = {
  options: ThemeOption[]
  theme: Theme
  onThemeChange: (value: string) => void
  id: string
}

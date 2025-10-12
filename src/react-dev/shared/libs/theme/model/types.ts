// src/react-dev/shared/libs/theme/model/types.ts

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

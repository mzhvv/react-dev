export type Theme = 'dark' | 'light' | 'system'
export type Color = 'default' | 'blue'

type StorageKey = 'vite-ui-theme'
type ColorStorageKey = 'vite-ui-color'

export type ThemeConfig = {
  storageKey: StorageKey
  defaultTheme: Theme
  colorStorageKey: ColorStorageKey
  defaultColor: Color
}

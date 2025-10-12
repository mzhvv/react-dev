// src/react-dev/shared/libs/theme/ui/types.ts

import type { Color, Theme } from '../model'

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

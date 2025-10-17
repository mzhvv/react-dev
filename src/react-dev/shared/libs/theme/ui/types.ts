// src/react-dev/shared/libs/theme/ui/types.ts

import type { Theme } from '../model'

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

export type ModeOption = { value: Theme['mode']; label: string; image: string }
export type ColorOption = { value: Theme['color']; label: string }

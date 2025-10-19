// src/react-dev/features/theme/types.ts

import type { Theme } from '@react-dev/entity/theme'

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

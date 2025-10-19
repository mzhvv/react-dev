// src/react-dev/entity/theme/ui/constants.ts

import type { ModeOptionMap, ColorOptionMap } from '../types'

type ModeOption = { label: string; image: string }
export const modeOptionMap = {
  system: { value: 'system', label: 'System', image: '/ui-system.png' },
  light: { value: 'light', label: 'Light', image: '/ui-light.png' },
  dark: { value: 'dark', label: 'Dark', image: '/ui-dark.png' },
} as const satisfies ModeOptionMap<ModeOption>

type ColorOption = { label: string }
export const colorOptionMap = {
  neutral: { value: 'neutral', label: 'Neutral' },
  blue: { value: 'blue', label: 'Blue' },
} as const satisfies ColorOptionMap<ColorOption>

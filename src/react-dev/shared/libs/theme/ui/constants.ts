// src/react-dev/shared/libs/theme/ui/constants.ts

import type { Theme } from '../model'
import type { ColorOption, ModeOption } from './types'

export const modeOptionMap = {
  system: { value: 'system', label: 'System', image: '/ui-system.png' },
  light: { value: 'light', label: 'Light', image: '/ui-light.png' },
  dark: { value: 'dark', label: 'Dark', image: '/ui-dark.png' },
} as const satisfies Record<Theme['mode'], ModeOption>

export const colorOptionMap = {
  neutral: { value: 'neutral', label: 'Neutral' },
  blue: { value: 'blue', label: 'Blue' },
} as const satisfies Record<Theme['color'], ColorOption>

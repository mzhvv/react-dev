// src/react-dev/entity/theme/ui/constants.ts

import type { ModeOptionMap, ColorOptionMap } from '../types'

type ModeOption = { label: string; image: string }
export const modeOptionMap = {
  system: { value: 'system', label: 'Системная', image: '/ui-system.png' },
  light: { value: 'light', label: 'Светлая', image: '/ui-light.png' },
  dark: { value: 'dark', label: 'Темная', image: '/ui-dark.png' },
} as const satisfies ModeOptionMap<ModeOption>

type ColorOption = {
  label: string
  /** Прилагательное в винительном падеже (например, "нейтральную", "синюю") */
  specialLabel: string
}
export const colorOptionMap = {
  neutral: { value: 'neutral', label: 'Нейтральный', specialLabel: 'нейтральную' },
  blue: { value: 'blue', label: 'Синий', specialLabel: 'синюю' },
} as const satisfies ColorOptionMap<ColorOption>

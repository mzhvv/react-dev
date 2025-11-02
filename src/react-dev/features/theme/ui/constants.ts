// src/react-dev/features/theme/ui/constants.ts

import { useTranslation } from 'react-i18next'
import type { ColorOptionMap, ThemeConstants, ThemeModeData } from '../types'

export const useThemeConstants = () => {
  const { t } = useTranslation()

  const mode = {
    legend: t('settings.theme.legend'),
    optionMap: {
      system: {
        value: 'system',
        label: t('settings.theme.label.system'),
        title: t('settings.theme.title.system'), // ariaLabel: '',
        image: {
          webp: '/assets/theme/ui-system.webp',
          src: '/assets/theme/ui-system.png',
          // width: 176, height: 140,
          alt: t('settings.theme.imageAlt.system'),
        },
      },
      light: {
        value: 'light',
        label: t('settings.theme.label.light'),
        title: t('settings.theme.title.light'), // ariaLabel: '',
        image: {
          webp: '/assets/theme/ui-light.webp',
          src: '/assets/theme/ui-light.png',
          // width: 176, height: 140,
          alt: t('settings.theme.imageAlt.light'),
        },
      },
      dark: {
        value: 'dark',
        label: t('settings.theme.label.dark'),
        title: t('settings.theme.title.dark'), // ariaLabel: '',
        image: {
          webp: '/assets/theme/ui-dark.webp',
          src: '/assets/theme/ui-dark.png',
          // width: 176, height: 140,
          alt: t('settings.theme.imageAlt.dark'),
        },
      },
    }, // as const satisfies ModeOptionMap<ModeOption>,
  } as const satisfies ThemeModeData

  const themeConstants = {
    heading: 'Внешний вид',
    mode: mode,
  } as const satisfies ThemeConstants

  return themeConstants
}

//

type ColorOption = {
  label: string
  /** Прилагательное в винительном падеже (например, "нейтральную", "синюю") */
  specialLabel: string
}
export const colorOptionMap = {
  neutral: { value: 'neutral', label: 'Нейтральный', specialLabel: 'нейтральную' },
  blue: { value: 'blue', label: 'Синий', specialLabel: 'синюю' },
} as const satisfies ColorOptionMap<ColorOption>

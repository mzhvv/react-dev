// src/react-dev/features/theme/ui/constants.ts

import { useTranslation } from 'react-i18next'
import type { ThemeConstants, ThemeConstant, ThemeColorConstant, ThemeModeConstant } from '../types'

export function useThemeConstants(): ThemeConstants {
  const { t } = useTranslation('settings')

  const theme = {
    heading: t('settings.theme.shared.heading'),
  } as const satisfies ThemeConstant

  const color = {
    legend: t('settings.localization.language.legend'),
    optionMap: {
      neutral: { value: 'neutral', label: 'Нейтральный', specialLabel: 'нейтральную' },
      blue: { value: 'blue', label: 'Синий', specialLabel: 'синюю' },
    },
  } as const satisfies ThemeColorConstant

  const mode = {
    legend: t('settings.theme.mode.legend'),
    optionMap: {
      system: {
        value: 'system',
        label: t('settings.theme.mode.label.system'),
        title: t('settings.theme.mode.title.system'), // ariaLabel: '',
        image: {
          webp: '/assets/theme/ui-system.webp',
          src: '/assets/theme/ui-system.png',
          // width: 176, height: 140,
          alt: t('settings.theme.mode.imageAlt.system'),
        },
      },
      light: {
        value: 'light',
        label: t('settings.theme.mode.label.light'),
        title: t('settings.theme.mode.title.light'), // ariaLabel: '',
        image: {
          webp: '/assets/theme/ui-light.webp',
          src: '/assets/theme/ui-light.png',
          // width: 176, height: 140,
          alt: t('settings.theme.mode.imageAlt.light'),
        },
      },
      dark: {
        value: 'dark',
        label: t('settings.theme.mode.label.dark'),
        title: t('settings.theme.mode.title.dark'), // ariaLabel: '',
        image: {
          webp: '/assets/theme/ui-dark.webp',
          src: '/assets/theme/ui-dark.png',
          // width: 176, height: 140,
          alt: t('settings.theme.mode.imageAlt.dark'),
        },
      },
    },
  } as const satisfies ThemeModeConstant

  const themeConstants = {
    theme,
    color,
    mode,
  } as const // satisfies ThemeConstants

  return themeConstants
}

// src/core/features/theme/lib/use-constants.ts

import { useTranslation } from 'react-i18next'
import type { ThemeConstants, ThemeConstant, ThemeColorConstant, ThemeModeConstant } from '../types'
import { PaletteIcon, SunMoonIcon } from 'lucide-react'

export function useThemeConstants() {
  const { t } = useTranslation('settings')

  const THEME = {
    themeSection: { id: 'theme', heading: t('settings.theme.themeSection.heading') },
  } as const satisfies ThemeConstant

  const THEME_COLOR = {
    themeColorSection: {
      id: 'theme-color',
      heading: t('settings.theme.colorSection.heading'),
      HeadingIcon: PaletteIcon,
    },
    themeColorForm: {
      legend: t('settings.theme.colorSection.form.legend'),
    },
    themeColorGroup: {
      ariaLabel: t('settings.theme.colorSection.group.ariaLabel'),
    },
    themeColorGroupItemMap: {
      neutral: {
        value: 'neutral',
        label: t('settings.theme.colorSection.groupItem.label.neutral'),
        title: t('settings.theme.colorSection.groupItem.title.neutral'),
        ariaLabel: t('settings.theme.colorSection.groupItem.ariaLabel.neutral'),
      },
      blue: {
        value: 'blue',
        label: t('settings.theme.colorSection.groupItem.label.blue'),
        title: t('settings.theme.colorSection.groupItem.title.blue'),
        ariaLabel: t('settings.theme.colorSection.groupItem.ariaLabel.blue'),
      },
    },
  } as const satisfies ThemeColorConstant

  const THEME_MODE = {
    themeModeSection: {
      id: 'theme-mode',
      heading: t('settings.theme.modeSection.heading'),
      HeadingIcon: SunMoonIcon,
    },
    themeModeForm: {
      legend: t('settings.theme.modeSection.form.legend'),
    },
    themeModeGroup: { ariaLabel: t('settings.theme.modeSection.group.ariaLabel') },
    themeModeGroupItemMap: {
      system: {
        value: 'system',
        label: t('settings.theme.modeSection.groupItem.label.system'),
        title: t('settings.theme.modeSection.groupItem.title.system'),
        ariaLabel: t('settings.theme.modeSection.groupItem.ariaLabel.system'),
        image: {
          webp: '/assets/theme/ui-system.webp',
          src: '/assets/theme/ui-system.png',
          // width: 176, height: 140,
          alt: t('settings.theme.modeSection.groupItem.imageAlt.system'),
        },
      },
      light: {
        value: 'light',
        label: t('settings.theme.modeSection.groupItem.label.light'),
        title: t('settings.theme.modeSection.groupItem.title.light'),
        ariaLabel: t('settings.theme.modeSection.groupItem.ariaLabel.light'),
        image: {
          webp: '/assets/theme/ui-light.webp',
          src: '/assets/theme/ui-light.png',
          // width: 176, height: 140,
          alt: t('settings.theme.modeSection.groupItem.imageAlt.light'),
        },
      },
      dark: {
        value: 'dark',
        label: t('settings.theme.modeSection.groupItem.label.dark'),
        title: t('settings.theme.modeSection.groupItem.title.dark'),
        ariaLabel: t('settings.theme.modeSection.groupItem.ariaLabel.dark'),
        image: {
          webp: '/assets/theme/ui-dark.webp',
          src: '/assets/theme/ui-dark.png',
          // width: 176, height: 140,
          alt: t('settings.theme.modeSection.groupItem.imageAlt.dark'),
        },
      },
    },
  } as const satisfies ThemeModeConstant

  const themeConstants = {
    THEME,
    THEME_COLOR,
    THEME_MODE,
  } as const satisfies ThemeConstants

  return themeConstants
}

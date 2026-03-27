// src/apps/__accumulator__/navigation/constants/sections.ts

import { useTranslation } from 'react-i18next'
import type { ConstantSectionMap } from '@core/configs/framework/dataConfig/navigation'

export function useGlobalNavigation() {
  const { t } = useTranslation('mainSidebarNavigation')

  const globalNavigation = {
    shared: {
      heading: {
        title: t('mainSidebarNavigation.shared.heading.title'),
      },
    },

    section: {
      development: { title: t('mainSidebarNavigation.sections.development.title') },
      projects: { title: t('mainSidebarNavigation.sections.projects.title') },
    } as const satisfies ConstantSectionMap,

    // links: {},
  } as const

  return globalNavigation
}

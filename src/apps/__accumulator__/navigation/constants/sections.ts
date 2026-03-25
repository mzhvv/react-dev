// src/apps/__accumulator__/navigation/constants/sections.ts

// navigationBuilders.createSectionObject требует только id! constKey = id

import { useTranslation } from 'react-i18next'
import type { SectionId } from '@core/configs/framework/dataConfig/navigation'

type ConstantNavigationSectionObjects = { title: string }

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
    } as const satisfies Record<SectionId, ConstantNavigationSectionObjects>,
    // links: {},
  } as const

  return globalNavigation
}

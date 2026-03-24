// src/apps/__accumulator__/navigation/constants/sections.ts

// navigationBuilders.createSectionObject требует только id! constKey = id

import { useTranslation } from 'react-i18next'
import type { SectionId } from '@core/configs/framework/dataConfig/navigation'

type ConstantNavigationSectionObjects = { title: string }

export function useGlobalNavigation() {
  const { t } = useTranslation('navigation')

  const globalNavigation = {
    section: {
      development: { title: t('navigation.global.sections.development.title') },
      projects: { title: t('navigation.global.sections.projects.title') },
    } as const satisfies Record<SectionId, ConstantNavigationSectionObjects>,
  } as const

  return globalNavigation
}

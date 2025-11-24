// src/react-dev/__aggregator__/constants/navigation/use-constants.ts

import type { SectionNavigationKey } from '@react-dev/__aggregator__/navigation'
import { APPS_CONSTANTS_ACCUMULATE } from '@accumulators/constants'
import { useReactdevNavigationConstants } from '@react-dev/shared/constants/use-navigation'

export function useGlobalNavigationConstants() {
  const { useDashboard01NavigationConstants } = APPS_CONSTANTS_ACCUMULATE
  const { REACTDEV_DOMAIN_NAVIGATION_LINKS } = useReactdevNavigationConstants()
  const { DOMAIN_NAVIGATION_LINKS: DASHBOARD01_DOMAIN_NAVIGATION_LINKS } =
    useDashboard01NavigationConstants()

  const constants = {
    section: {
      application: 'Приложение', //t('') || 'Приложение', // 'Application',
      author: 'Автор', // t('') || 'Автор', //'Author',
      projects: 'Проекты', // t('') || 'Проекты', // 'Projects',
      development: 'Development', // t('') || 'Development',
    } as const satisfies Record<SectionNavigationKey, string>,
    links: {
      ...REACTDEV_DOMAIN_NAVIGATION_LINKS,
      ...DASHBOARD01_DOMAIN_NAVIGATION_LINKS,
    } as const,
  } as const

  return constants
}

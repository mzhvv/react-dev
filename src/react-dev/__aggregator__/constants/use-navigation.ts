// src/react-dev/__aggregator__/constants/use-navigation.ts

import type { SectionNavigationKey } from '@libs/navigation'
import { useReactdevNavigationConstants } from '@react-dev/shared/constants/use-navigation'
import { APPS_CONSTANTS_ACCUMULATE } from '@accumulators/constants'

export function useGlobalNavigationConstants() {
  const { useDashboard01NavigationConstants, useUiNavigationConstants } = APPS_CONSTANTS_ACCUMULATE

  const { REACTDEV_DOMAIN_NAVIGATION_LINKS } = useReactdevNavigationConstants()
  const { DOMAIN_NAVIGATION_LINKS: DASHBOARD01_DOMAIN_NAVIGATION_LINKS } =
    useDashboard01NavigationConstants()
  const { DOMAIN_NAVIGATION_LINKS: UI_DOMAIN_NAVIGATION_LINKS } = useUiNavigationConstants()

  const constants = {
    section: {
      application: 'Приложение',
      author: 'Автор',
      projects: 'Проекты',
      development: 'Development',
    } as const satisfies Record<SectionNavigationKey, string>,
    links: {
      ...REACTDEV_DOMAIN_NAVIGATION_LINKS,
      ...DASHBOARD01_DOMAIN_NAVIGATION_LINKS,
      ...UI_DOMAIN_NAVIGATION_LINKS,
    } as const,
  } as const

  return constants
}

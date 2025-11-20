// src/react-dev/global/constants/navigation/use-constants.tsx

// import { useTranslation } from 'react-i18next'

import type { SectionNavigationKey } from '@global/navigation'

import { APPS_CONSTANTS_ACCUMULATE } from '@apps/accumulators'
import { useReactdevNavigationConstants } from '@react-dev/shared/constants/navigation'

export function useGlobalNavigationConstants() {
  // const { t } = useTranslation('common')

  const {
    useUiNavigationConstants,
    useProject0NavigationConstants,
    useDashboard01NavigationConstants,
  } = APPS_CONSTANTS_ACCUMULATE

  const { REACTDEV_DOMAIN_NAVIGATION_LINKS } = useReactdevNavigationConstants()
  const { DASHBOARD01_DOMAIN_NAVIGATION_LINKS } = useDashboard01NavigationConstants()
  const { PROJECT0_DOMAIN_NAVIGATION_LINKS } = useProject0NavigationConstants()
  const { UI_DOMAIN_NAVIGATION_LINKS } = useUiNavigationConstants()

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
      ...PROJECT0_DOMAIN_NAVIGATION_LINKS,
      ...UI_DOMAIN_NAVIGATION_LINKS,
    } as const,
  } as const

  return constants
}

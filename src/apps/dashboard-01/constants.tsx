// src/apps/dashboard-01/constants.tsx

// import { useTranslation } from 'react-i18next'

import type { DomainPathNavigation } from '@global/navigation'
import type { GlobalNavigationConstants } from '@global/constants'
import type { DomainRoutePath } from '@apps/dashboard-01/types'

type Dashboard01DomainNavigationLinks = Record<
  DomainPathNavigation<DomainRoutePath>,
  GlobalNavigationConstants<DomainRoutePath, DomainPathNavigation<DomainRoutePath>>
>

export function useDashboard01NavigationConstants() {
  // const { t } = useTranslation('common')

  const DASHBOARD01_DOMAIN_NAVIGATION_LINKS = {
    '/dashboard-01': {
      relativePath: 'dashboard-01',
      absolutePath: '/dashboard-01',
      title: 'dashboard-01', // t('') || 'dashboard-01',
    },
  } as const satisfies Dashboard01DomainNavigationLinks

  return {
    DASHBOARD01_DOMAIN_NAVIGATION_LINKS,
  }
}

// src/apps/project-0/constants.ts

// import { useTranslation } from 'react-i18next'

import type { DomainPathNavigation } from '@react-dev/__global__/navigation'
import type { GlobalNavigationConstants } from '@react-dev/__global__/constants'
import type { DomainRoutePath } from '@apps/project-0/types'

type Project0DomainNavigationLinks = Record<
  DomainPathNavigation<DomainRoutePath>,
  GlobalNavigationConstants<DomainRoutePath, DomainPathNavigation<DomainRoutePath>>
>

export function useProject0NavigationConstants() {
  // const { t } = useTranslation('common')

  const PROJECT0_DOMAIN_NAVIGATION_LINKS = {
    '/project-0': {
      relativePath: 'project-0',
      absolutePath: '/project-0',
      title: 'project-0', // t('') || 'project-0'
    },
  } as const satisfies Project0DomainNavigationLinks

  return {
    PROJECT0_DOMAIN_NAVIGATION_LINKS,
  }
}

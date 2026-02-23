// src/react-dev/__aggregator__/navigation.ts

import type { AppsDomainNavigation } from '@apps/accumulators/types'
import type { GlobalNavigationSections } from '@react-dev/aggregator/types'
import { appsDomainNavigation } from '@apps/accumulators/navigation'

function createGlobalNavgition(appsDomainNavigation: AppsDomainNavigation) {
  const domainSections = [
    {
      title: 'application',
      links: ['/', ...appsDomainNavigation.application],
    },
    {
      title: 'author',
      links: [...appsDomainNavigation.author],
    },
    {
      title: 'projects',
      links: [...appsDomainNavigation.projects],
    },
    { title: 'development', links: appsDomainNavigation.development },
  ] as const satisfies GlobalNavigationSections

  return {
    domainSections,
  }
}

export const globalNavigation = createGlobalNavgition(appsDomainNavigation)

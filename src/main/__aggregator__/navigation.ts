// src/main/__aggregator__/navigation.ts

import type { AppsDomainNavigation } from '@accumulator/types'
import { appsDomainNavigation } from '@accumulator/navigation'

import type { GlobalNavigationSections } from './types'

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

// src/apps/__accumulators__/types.ts

import type { SectionNavigationKey } from '@libs/navigation'

import type {
  TemplateAppRoutes,
  TemplateAppDomainNavigation,
  TemplateAppConstantsNavigationDomainLink,
} from '@template-app'

export type AppsRoutes = TemplateAppRoutes

export type AppsDomainNavigation = Record<SectionNavigationKey, Array<TemplateAppDomainNavigation>>

export type AppsConstantsNavigationDomainLink = TemplateAppConstantsNavigationDomainLink

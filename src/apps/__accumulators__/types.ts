// src/apps/__accumulators__/types.ts

import type { Navigation } from '@libs/navigation'

import type {
  TemplateAppRoutes,
  TemplateAppDomainNavigation,
  TemplateAppConstantsNavigationDomainLink,
} from '@template-app'

export type AppsRoutes = TemplateAppRoutes

export type AppsDomainNavigation = Navigation<TemplateAppDomainNavigation>

export type AppsConstantsNavigationDomainLink = TemplateAppConstantsNavigationDomainLink

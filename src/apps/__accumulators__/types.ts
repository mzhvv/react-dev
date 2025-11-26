// src/apps/__accumulators__/types.ts

import type { TemplateAppConstants, TemplateAppDomainNavigation } from '@apps/__template-app__'
import type { UiDomainNavigation } from '@apps/ui'
import type { Dashboard01Constants, Dashboard01DomainNavigation } from '@apps/dashboard-01'

export type AppsDomainNavigation =
  | TemplateAppDomainNavigation
  | UiDomainNavigation
  | Dashboard01DomainNavigation

export type AppsConstants = TemplateAppConstants | Dashboard01Constants

export type AppDomainNavigationLinks = ''

// src/apps/__accumulators__/types.ts

import type { SectionNavigationKey } from '@libs/navigation'
import type {
  TemplateAppRoutes,
  TemplateAppDomainNavigation,
  TemplateAppConstantsDomainNavigationLink,
} from '@template-app'

export type RoutesAccumulate = TemplateAppRoutes

export type DomainNavigationAccumulate = Record<
  SectionNavigationKey,
  Array<TemplateAppDomainNavigation>
>

export interface ConstantsAPIAccumulate {
  navigation: {
    domainLinks: TemplateAppConstantsDomainNavigationLink
  }
}

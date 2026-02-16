// src/apps/__template-app-experience__/index.ts
/** @private - только для src/apps/__accumulators__/* */

export type {
  RoutesOutput as TemplateAppExperienceRoutes,
  DomainNavigation as TemplateAppExperienceDomainNavigation,
  ConstantsNavigationDomainLink as TemplateAppExperienceConstantsNavigationDomainLink,
} from './shared/types/prnc'

export { routes as templateAppExperienceRoutes } from './app/routes'
export { domainNavigation as templateAppExperienceDomainNavigation } from './shared/navigation'
export { constantsAPI as templateAppExperienceConstantsAPI } from './shared/constants'

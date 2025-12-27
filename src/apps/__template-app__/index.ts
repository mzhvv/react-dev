// src/apps/__template-app__/index.ts
/** @private - только для src/apps/__accumulators__/* */

export type {
  Routes as TemplateAppRoutes,
  DomainNavigation as TemplateAppDomainNavigation,
  ConstantsNavigationDomainLink as TemplateAppConstantsNavigationDomainLink,
} from '@template-app/shared/types/prnc'

export { routes as templateAppRoutes } from '@template-app/app/routes'
export { domainNavigation as templateAppDomainNavigation } from '@template-app/shared/navigation'
export { constantsAPI as templateAppConstantsAPI } from '@template-app/shared/constants'

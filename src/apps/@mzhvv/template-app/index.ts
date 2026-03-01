// src/apps/__template-app__/index.ts
/** @private - только для src/apps/__accumulators__/* */

export type {
  RoutesOutput as TemplateAppRoutes,
  DomainNavigation as TemplateAppDomainNavigation,
  ConstantsNavigationDomainLink as TemplateAppConstantsNavigationDomainLink,
} from '@apps/@mzhvv/template-app/shared/types/prnc'

export { routes as templateAppRoutes } from '@apps/@mzhvv/template-app/app/routes'
export { domainNavigation as templateAppDomainNavigation } from '@apps/@mzhvv/template-app/shared/navigation'
export { constantsAPI as templateAppConstantsAPI } from '@apps/@mzhvv/template-app/shared/constants'

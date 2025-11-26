// src/apps/__template-app__/index.ts
/** @private - только для src/apps/__accumulators__/* */

export type {
  DomainNavigation as TemplateAppDomainNavigation,
  Constants as TemplateAppConstants,
} from './shared/types/prnc'
export { routes as templateAppRoutes } from './app/routes'
export { domainNavigation as templateAppDomainNavigation } from './shared/navigation'
export { useConstants as useTemplateAppConstants } from './shared/constants/use-navigation'

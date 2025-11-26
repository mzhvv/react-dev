// src/apps/ui/index.ts
/** @private - только для src/apps/__accumulators__/* */

export type {
  DomainNavigation as UiDomainNavigation,
  Constants as UiConstants,
} from './shared/types/prnc'
export { routes as uiRoutes } from './app/router'
export { domainNavigation as uiDomainNavigation } from './shared/navigation'
export { useConstants as useUiConstants } from './shared/constants/use-navigation'

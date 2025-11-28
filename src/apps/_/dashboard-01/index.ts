// src/apps/dashboard-01/index.ts
/** @private - только для src/apps/__accumulators__/* */

export type {
  DomainNavigation as Dashboard01DomainNavigation,
  Constants as Dashboard01Constants,
} from './shared/types/prnc'
export { routes as dashboard01Routes } from './app/routes'
export { domainNavigation as dashboard01DomainNavigation } from './shared/navigation'
export { useConstants as useDashboard01NConstants } from './shared/constants/use-navigation'

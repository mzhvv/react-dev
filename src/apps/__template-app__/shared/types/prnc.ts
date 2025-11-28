// src/apps/__template-app__/shared/types/prnc.ts
/** @description prnc = Paths-Routes-Navigations-Constants */

import type { EntranceRoutesOf, StrictRouteObjectOf } from '@core/libs/router'
import type { NavigationOf } from '@core/libs/navigation'
import type {
  ConstantsAPIWith,
  ConstantsNavigationWith,
  ConstantsNavigationLinkEntityOf,
} from '@core/libs/constants'
import type { SafeRelativePath } from '@core/utils/string'

// #region Paths

type DomainPath = SafeRelativePath<'template-app'>

// #endregion

// #region Routes

export type Routes = EntranceRoutes
export type EntranceRoutes = EntranceRoutesOf<DomainRoutes & AAADomainRoutes>

export type DomainRoutes = StrictRouteObjectOf<DomainPath>

export type AAADomainRoutes = StrictRouteObjectOf<'aaaParent', AAAChildrenRoutes>
export type AAAChildrenRoutes = StrictRouteObjectOf<'aaaChildren1' | 'aaaChildren2'>

// #endregion

// #region Navigations

export type DomainNavigation = NavigationOf<DomainPath>

// #endregion

// #region Constants

export type ConstantsAPI = ConstantsAPIWith<ConstantsNavigation>
export type ConstantsNavigation = ConstantsNavigationWith<ConstantsNavigationDomainLink>

export type ConstantsNavigationDomainLink = ConstantsNavigationLinkEntityOf<DomainPath>

// #endregion

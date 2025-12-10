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
export type EntranceRoutes = EntranceRoutesOf<TemplateAppDomainRoutes & TestDomainRoutes>

export type TemplateAppDomainRoutes = StrictRouteObjectOf<DomainPath>

// test
type TestDomainPath = 'test-domain'
export type TestDomainRoutes = StrictRouteObjectOf<TestDomainPath, TestSegmentRoutes>
type TestSegments = 'test-segment-1' | 'test-segment-2'
export type TestSegmentRoutes = StrictRouteObjectOf<TestSegments>

// #endregion
// #region Navigations

export type DomainNavigation = NavigationOf<DomainPath>

// #endregion
// #region Constants

export type ConstantsAPI = ConstantsAPIWith<ConstantsNavigation>
export type ConstantsNavigation = ConstantsNavigationWith<ConstantsNavigationDomainLink>

export type ConstantsNavigationDomainLink = ConstantsNavigationLinkEntityOf<DomainPath>

// #endregion

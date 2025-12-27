// src/apps/__template-app__/shared/types/prnc.ts
/** @description prnc = Paths-Routes-Navigations-Constants */

import type { IndexRouteObject } from 'react-router'

import type { SafeRelativePath } from '@core/utils/string'

import type {
  StrictCustomRouteConfigObject,
  StrictRouteConfigObject,
  TupleRouteObject,
  TupleRouteObjectChildren,
  IsTupleRoutesCompatible,
} from '@core/libs/router'
import type { NavigationOf } from '@core/libs/navigation'
import type {
  ConstantsAPIWith,
  ConstantsNavigationWith,
  ConstantsNavigationLinkEntityOf,
} from '@core/libs/constants'
import type { FromUnion } from '@core/utils/types'

// #region Paths

type TemplateAppPath = SafeRelativePath<'template-app'>

type TestDomainPath = SafeRelativePath<'test-domain'>
type TestSegmentPath = SafeRelativePath<'test-segment-1' | 'test-segment-2'>

// #endregion
// #region Routes

// ℹ️ Entrance / Config

export type StrictRouteConfig = ProviderRouteConfig
type ProviderRouteConfig = StrictCustomRouteConfigObject<'provider', undefined, RootRouteConfig>
type RootRouteConfig = StrictRouteConfigObject<TemplateAppPath, TestDomainRoutesConfig>
type TestDomainRoutesConfig = StrictRouteConfigObject<TestDomainPath, TestSegmentRoutesConfig>
type TestSegmentRoutesConfig = StrictRouteConfigObject<TestSegmentPath>

// ℹ️ Output / Return routesBuilder

export type Routes = Array<ProviderRoute>
// @ts-expect-error 6196
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type __IsRoutesCompatible__ = IsTupleRoutesCompatible<Routes>

type ProviderRoute = TupleRouteObject<undefined, [TemplateAppLayoutRoute]>
type TemplateAppLayoutRoute = TupleRouteObject<
  TemplateAppPath,
  [TemplateAppHomeRoute, TestDomainRoute]
>
type TemplateAppHomeRoute = IndexRouteObject
type TestDomainRoute = TupleRouteObject<TestDomainPath, [...TestSegmentRoutes]>
type TestSegmentRoutes = [
  TupleRouteObject<FromUnion<TestSegmentPath, 'test-segment-1'>>,
  TupleRouteObject<FromUnion<TestSegmentPath, 'test-segment-2'>>,
]

export type Routes2 = Array<
  ProviderRoute2<
    [TemplateAppLayoutRoute2<[TemplateAppHomeRoute2, TestDomainRoute2<[...TestSegmentRoutes2]>]>]
  >
>
// @ts-expect-error 6196
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type __IsRoutes2Compatible__ = IsTupleRoutesCompatible<Routes2>

type ProviderRoute2<T extends TupleRouteObjectChildren> = TupleRouteObject<undefined, T>
type TemplateAppLayoutRoute2<T extends TupleRouteObjectChildren> = TupleRouteObject<
  TemplateAppPath,
  T
>
type TemplateAppHomeRoute2 = IndexRouteObject
type TestDomainRoute2<T extends TupleRouteObjectChildren> = TupleRouteObject<TestDomainPath, T>
type TestSegmentRoutes2 = [
  TupleRouteObject<FromUnion<TestSegmentPath, 'test-segment-1'>>,
  TupleRouteObject<FromUnion<TestSegmentPath, 'test-segment-2'>>,
]

// #endregion
// #region Navigations

export type DomainNavigation = NavigationOf<TemplateAppPath>

// #endregion
// #region Constants

export type ConstantsAPI = ConstantsAPIWith<ConstantsNavigation>
export type ConstantsNavigation = ConstantsNavigationWith<ConstantsNavigationDomainLink>

export type ConstantsNavigationDomainLink = ConstantsNavigationLinkEntityOf<TemplateAppPath>

// #endregion

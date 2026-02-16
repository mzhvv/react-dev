// src/apps/__template-app-experience__/shared/types/prnc.ts
/** @description prnc = Paths-Routes-Navigations-Constants */

import type { SafeRelativePath } from '@/packages/utils/string'
import type { FromUnion } from '@/packages/utils/types'

import type {
  IndexRouteObject,
  StrictRouteObjectConfig,
  TupleRouteObject,
  TupleRouteObjectChildren,
} from '@/packages/libs/router'
import type { NavigationOf } from '@/packages/libs/navigation'
import type {
  ConstantsAPIWith,
  ConstantsNavigationWith,
  ConstantsNavigationLinkEntityOf,
} from '@/packages/libs/constants'

// #region Paths

type TemplateAppExperiencePath = SafeRelativePath<'template-app-experience'>

type TestDomainPath = SafeRelativePath<'test-domain'>
type TestSegmentPath = SafeRelativePath<'test-segment-1' | 'test-segment-2'>

// #endregion
// #region Routes

// Entrance / Config

export type RoutesConfig = ProviderRouteConfig
type ProviderRouteConfig = StrictRouteObjectConfig<
  undefined,
  TemplateAppLayoutRouteConfig,
  'provider'
>
type TemplateAppLayoutRouteConfig = StrictRouteObjectConfig<
  TemplateAppExperiencePath,
  TemplateAppHomeRouteConfig | TestDomainRoutesConfig
>
type TemplateAppHomeRouteConfig = StrictRouteObjectConfig<'index'>
type TestDomainRoutesConfig = StrictRouteObjectConfig<TestDomainPath, TestSegmentRoutesConfig>
type TestSegmentRoutesConfig =
  | StrictRouteObjectConfig<FromUnion<TestSegmentPath, 'test-segment-1'>>
  | StrictRouteObjectConfig<FromUnion<TestSegmentPath, 'test-segment-2'>>

// Output / Return routesBuilder

export type RoutesOutput = Routes & Routes2

export type Routes = ProviderRoute
type ProviderRoute = TupleRouteObject<undefined, [TemplateAppLayoutRoute]>
type TemplateAppLayoutRoute = TupleRouteObject<
  TemplateAppExperiencePath,
  [TemplateAppHomeRoute, TestDomainRoute]
>
interface TemplateAppHomeRoute extends IndexRouteObject {}
type TestDomainRoute = TupleRouteObject<TestDomainPath, [...TestSegmentRoutes]>
type TestSegmentRoutes = [
  TupleRouteObject<FromUnion<TestSegmentPath, 'test-segment-1'>>,
  TupleRouteObject<FromUnion<TestSegmentPath, 'test-segment-2'>>,
]

export type Routes2 = ProviderRoute2<
  [TemplateAppLayoutRoute2<[TemplateAppHomeRoute2, TestDomainRoute2<[...TestSegmentRoutes2]>]>]
>
type ProviderRoute2<T extends TupleRouteObjectChildren> = TupleRouteObject<undefined, T>
type TemplateAppLayoutRoute2<T extends TupleRouteObjectChildren> = TupleRouteObject<
  TemplateAppExperiencePath,
  T
>
interface TemplateAppHomeRoute2 extends IndexRouteObject {}
type TestDomainRoute2<T extends TupleRouteObjectChildren> = TupleRouteObject<TestDomainPath, T>
type TestSegmentRoutes2 = [
  TupleRouteObject<FromUnion<TestSegmentPath, 'test-segment-1'>>,
  TupleRouteObject<FromUnion<TestSegmentPath, 'test-segment-2'>>,
]

// #endregion
// #region Navigations

export type DomainNavigation = NavigationOf<TemplateAppExperiencePath>

// #endregion
// #region Constants

export type ConstantsAPI = ConstantsAPIWith<ConstantsNavigation>
export type ConstantsNavigation = ConstantsNavigationWith<ConstantsNavigationDomainLink>

export type ConstantsNavigationDomainLink =
  ConstantsNavigationLinkEntityOf<TemplateAppExperiencePath>

// #endregion

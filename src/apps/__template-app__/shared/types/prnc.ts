// src/apps/__template-app__/shared/types/prnc.ts
/** @description prnc = Paths-Routes-Navigations-Constants */

import type { IndexRouteObject } from 'react-router'

import type { SafeRelativePath } from '@core/utils/string'

import type {
  StrictCustomRouteConfigObject,
  StrictRouteConfigObject,
  StrictTupleRouteObject,
} from '@core/libs/router'
import type { NavigationOf } from '@core/libs/navigation'
import type {
  ConstantsAPIWith,
  ConstantsNavigationWith,
  ConstantsNavigationLinkEntityOf,
} from '@core/libs/constants'

// #region Paths

type TemplateApp = SafeRelativePath<'template-app'>

type TestDomainPath = SafeRelativePath<'test-domain'>
type TestSegmentPath = SafeRelativePath<'test-segment-1' | 'test-segment-2'>

// #endregion
// #region Routes

// ℹ️ Entrance / Config

export type StrictRouteConfig = ProviderConfigObject

type ProviderConfigObject = StrictCustomRouteConfigObject<'provider', undefined, RootRoutesConfig>
type RootRoutesConfig = StrictRouteConfigObject<TemplateApp, TestDomainRoutesConfig>

type TestDomainRoutesConfig = StrictRouteConfigObject<TestDomainPath, TestSegmentRoutesConfig>
type TestSegmentRoutesConfig = StrictRouteConfigObject<TestSegmentPath>

// ℹ️ Output / Return routesBuilder

export type Routes = [
  StrictTupleRouteObject<
    undefined,
    [StrictTupleRouteObject<TemplateApp, [IndexRouteObject, TestDomainRoutesOutput]>]
  >,
]
type TestDomainRoutesOutput = StrictTupleRouteObject<TestDomainPath, [...TestSegmentRoutesOutput]>
type TestSegmentRoutesOutput = [
  StrictTupleRouteObject<Extract<TestSegmentPath, 'test-segment-1'>>,
  StrictTupleRouteObject<Extract<TestSegmentPath, 'test-segment-2'>>,
]

// #endregion
// #region Navigations

export type DomainNavigation = NavigationOf<TemplateApp>

// #endregion
// #region Constants

export type ConstantsAPI = ConstantsAPIWith<ConstantsNavigation>
export type ConstantsNavigation = ConstantsNavigationWith<ConstantsNavigationDomainLink>

export type ConstantsNavigationDomainLink = ConstantsNavigationLinkEntityOf<TemplateApp>

// #endregion

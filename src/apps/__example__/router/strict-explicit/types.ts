// src/core/libs/router/__experience__/strict-explicit/types.ts

import type { FromUnion } from '@/packages/utils/types'
import type { ValidateKebabCase } from '@/packages/utils/string'

import type { IndexRouteObject } from '../../../../packages/libs/router/types/foundation'
import type {
  IndexRouteObjectConfig,
  NonIndexRouteObjectConfig,
  RouteObject,
  ChildrenRouteObject,

  /// Предопределенные
  KeysRouteObjectConfig,
} from '../../../../packages/libs/router/types/strict-explicit'

// #region Paths

type RootPath = ValidateKebabCase<'core-libs-router-types-strict-explicit'>

type Domain1Path = ValidateKebabCase<'domain-1'>

type Domain2Path = ValidateKebabCase<'domain-2'>

type Domain3Path = ValidateKebabCase<'domain-3'>
type SegmentDomain3Path = ValidateKebabCase<'domain-3-segment-1' | 'domain-3-segment-2'>
type PageSegment1Domain3Path = ValidateKebabCase<'domain-3-segment-1-page-1'>
type PageSegment2Domain3Path = ValidateKebabCase<
  'domain-3-segment-2-first-child-fallback' | 'domain-3-segment-2-page-1'
>

// #endregion
// #region Routes

// 🎯 - Entrance / Config

export type RoutesObjectConfig = RootRoutesObjectConfig

type RootLayout = RootPath
type RootRoutesObjectConfig = NonIndexRouteObjectConfig<
  RootLayout,
  Domain1RoutesObjectConfig & Domain2RoutesObjectConfig & Domain3RoutesObjectConfig

  // | IndexRouteObjectConfig
>

// Через index, layout явный
type Domain1LayoutPath = Domain1Path
type Domain1Index = IndexRouteObjectConfig

type Domain1RoutesObjectConfig = NonIndexRouteObjectConfig<Domain1LayoutPath, Domain1Index>

// Без index, layout undefined, явный path
type Domain2LayoutKey = Domain2Path
type Domain2LayoutPath = undefined
type Domain2FallbackKey = KeysRouteObjectConfig<'fallback', Domain2Path> // => "fallbackDomain2"
type Domain2FallbackPath = Domain2Path

type Domain2RoutesObjectConfig = NonIndexRouteObjectConfig<
  Domain2LayoutPath,
  NonIndexRouteObjectConfig<Domain2FallbackPath, undefined, Domain2FallbackKey>,
  Domain2LayoutKey
>

// Вложенность
type Domain3RoutesObjectConfig = NonIndexRouteObjectConfig<
  Domain3Path,
  IndexRouteObjectConfig &
    (NonIndexRouteObjectConfig<
      FromUnion<SegmentDomain3Path, FromUnion<SegmentDomain3Path, 'domain-3-segment-1'>>,
      IndexRouteObjectConfig &
        NonIndexRouteObjectConfig<FromUnion<PageSegment1Domain3Path, 'domain-3-segment-1-page-1'>>
    > &
      NonIndexRouteObjectConfig<
        FromUnion<SegmentDomain3Path, FromUnion<SegmentDomain3Path, 'domain-3-segment-2'>>,
        NonIndexRouteObjectConfig<
          FromUnion<PageSegment2Domain3Path, 'domain-3-segment-2-first-child-fallback'>
        > &
          NonIndexRouteObjectConfig<FromUnion<PageSegment2Domain3Path, 'domain-3-segment-2-page-1'>>
      >)
>

// 🎯 - Output / Return routesBuilder

export type RoutesTuple = ProviderRoutesTuple
type ProviderRoutesTuple = RouteObject<undefined, [LayoutRoutesTuple]>
type LayoutRoutesTuple = RouteObject<RootPath, [HomeRouteObject, Domain1RoutesTuple]>
interface HomeRouteObject extends IndexRouteObject {}
type Domain1RoutesTuple = RouteObject<Domain1Path, [...SegmentDomain1RoutesTuple]>
type SegmentDomain1RoutesTuple = [
  RouteObject<FromUnion<SegmentDomain3Path, 'domain-3-segment-1'>>,
  RouteObject<FromUnion<SegmentDomain3Path, 'domain-3-segment-2'>>,
]

export type Routes2 = ProviderRoute2<
  [TemplateAppLayoutRoute2<[TemplateAppHomeRoute2, TestDomainRoute2<[...TestSegmentRoutes2]>]>]
>
type ProviderRoute2<T extends ChildrenRouteObject> = RouteObject<undefined, T>
type TemplateAppLayoutRoute2<T extends ChildrenRouteObject> = RouteObject<RootPath, T>
interface TemplateAppHomeRoute2 extends IndexRouteObject {}
type TestDomainRoute2<T extends ChildrenRouteObject> = RouteObject<Domain1Path, T>
type TestSegmentRoutes2 = [
  RouteObject<FromUnion<SegmentDomain3Path, 'domain-3-segment-1'>>,
  RouteObject<FromUnion<SegmentDomain3Path, 'domain-3-segment-2'>>,
]

// #endregion

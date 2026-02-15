// src/core/libs/router/__example__/unit/types.ts

import type { SafeRelativePath } from '@core/utils/string'
import type { FromUnion } from '@core/utils/types'

import type { StrictRouteObjectConfig } from '@core/libs/router/types/unit'

// #region Paths

type ExamplePath = SafeRelativePath<'example-core-libs-router-types-unit'>

type Domain1Paths = SafeRelativePath<'domain-1'>
type SegmentDomain1Paths = SafeRelativePath<'domain-1-segment-1' | 'domain-1-segment-2'>

// #endregion
// #region Routes

// Entrance / Config

export type RoutesConfig = ProviderRoutesConfig
type ProviderRoutesConfig = StrictRouteObjectConfig<undefined, LayoutRoutesConfig, 'provider'>
type LayoutRoutesConfig = StrictRouteObjectConfig<
  ExamplePath,
  HomeRoutesConfig | Domain1RoutesConfig
>
type HomeRoutesConfig = StrictRouteObjectConfig<'index'>

type Domain1RoutesConfig = StrictRouteObjectConfig<Domain1Paths, SegmentsDomain1RoutesConfig>
type SegmentsDomain1RoutesConfig =
  | StrictRouteObjectConfig<FromUnion<SegmentDomain1Paths, 'domain-1-segment-1'>>
  | StrictRouteObjectConfig<FromUnion<SegmentDomain1Paths, 'domain-1-segment-2'>>

// #endregion

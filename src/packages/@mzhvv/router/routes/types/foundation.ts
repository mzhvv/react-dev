// src/packages/libs/router/types/foundation.ts

import type {
  // RouteObject as DefaultRouteObject,
  IndexRouteObject as DefaultIndexRouteObject,
  NonIndexRouteObject as DefaultNonIndexRouteObject,
} from 'react-router'

import type { IsValidateKebabCase } from '@/packages/@mzhvv/utils/string'

// #region 🧩 re-export / Managed by default types

type IndexRouteObject = DefaultIndexRouteObject
type NonIndexRouteObject = DefaultNonIndexRouteObject
type RouteObject = IndexRouteObject | NonIndexRouteObject

// #endregion

// #region 🧩 Entrance / *Config

export type IndexRouteObjectConfig = IndexRouteObject
export type NonIndexRouteObjectConfig = Omit<NonIndexRouteObject, 'children'> & {
  children?: Record<string, RouteObjectConfig>
}
export type RouteObjectConfig = IndexRouteObjectConfig | NonIndexRouteObjectConfig
export type RoutesConfig = Record<string, RouteObjectConfig>

// #endregion

// #region 🧩 Output / * / Return routesBuilder

export type { RouteObject, IndexRouteObject, NonIndexRouteObject }

// #endregion

// #region 🧩 Paths

export type RelativePath<T extends IsValidateKebabCase<T>> = T
// export type AbsolutePath<T extends string> = `/${T}`

// #endregion

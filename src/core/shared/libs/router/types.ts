// src/core/shared/libs/router/types.ts

import type {
  NonIndexRouteObject,
  IndexRouteObject,
  RouteObject,
  // RouteObject as DefaultRouteObject,
} from 'react-router'

import type { CamelCase } from '@core/utils/string'
import type { Expand } from '@core/utils/types'

// ℹ️ Entrance / Config

export type RouteConfigNode =
  | (Omit<NonIndexRouteObject, 'children'> & {
      children?: Record<string, RouteConfigNode>
    })
  | IndexRouteObject

export type RouteConfigObject = {
  [key: string]: RouteConfigNode
}

export type StrictCustomRouteConfigObject<
  Key extends CamelCase<string>,
  Path extends string | undefined,
  Children = never,
> = Expand<{
  [K in Key]: Omit<NonIndexRouteObject, 'path' | 'children'> & {
    path?: Path
    children?: Children
  }
}>

export type StrictRouteConfigObject<
  Path extends string,
  Children = never,
> = StrictCustomRouteConfigObject<CamelCase<Path>, Path, { index: IndexRouteObject } | Children>

// ℹ️ Output / Return routesBuilder

export type TupleRouteObjectChildren = unknown[] | undefined
export type TupleRouteObject<
  Path extends string | undefined,
  Children extends TupleRouteObjectChildren = undefined,
> = Omit<NonIndexRouteObject, 'path' | 'children'> & {
  path: Path
} & (Children extends undefined ? { children?: undefined } : { children: Children })

export type IsTupleRoutesCompatible<T> = T extends RouteObject[]
  ? '✅ Совместимы'
  : '❌ Не совместимы'

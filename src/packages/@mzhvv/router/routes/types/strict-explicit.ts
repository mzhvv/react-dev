// src/packages/@mzhvv/router/routes/types/strict-explicit.ts

import type { Expand } from '@/packages/@mzhvv/utils/types'
import type {
  AsKebabCase,
  AsCamelCase,
  AsPascalCase,
  IsValidateKebabCase,
} from '@/packages/@mzhvv/utils/string'

import type { IndexRouteObject, NonIndexRouteObject } from './foundation'

// #region 🧩 Entrance / *Config

export type IndexRouteObjectConfig = { index: IndexRouteObject }
/** @generics <Path, Children, Key(custom key - при необходимости. По умолчанию CamelCase<Path>) /> */
export type NonIndexRouteObjectConfig<
  Path extends string | undefined,
  Children = never,
  Key extends string = Path extends string ? Path : string,
> = Expand<{
  [K in AsCamelCase<Key>]: Omit<NonIndexRouteObject, 'path' | 'children'> & {
    path?: Path extends string
      ? Path extends IsValidateKebabCase<Path>
        ? Path
        : AsKebabCase<Path>
      : undefined
    children?: Children
  }
}>

// Предопределенные
type KeysRouteObjectConfigMap<S extends string> = {
  layout: `layout${AsPascalCase<S>}`
  // firstChildFallback: `firstChildFallback${PascalCase<S>}`
  fallback: `fallback${AsPascalCase<S>}`
}
export type KeysRouteObjectConfig<
  T extends keyof KeysRouteObjectConfigMap<string>,
  S extends string,
> = KeysRouteObjectConfigMap<S>[T]

// #endregion

// #region 🧩 Output / * / Return routesBuilder

export type ChildrenRouteObject = unknown[] | undefined
export type RouteObject<
  Path extends string | undefined,
  Children extends ChildrenRouteObject = undefined,
> = Omit<NonIndexRouteObject, 'path' | 'children'> & {
  path: Path
} & (Children extends undefined ? { children?: undefined } : { children: Children })

// #endregion

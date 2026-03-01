// src/packages/@mzhvv/router/routes/types/unit.ts

import type { AsCamelCase } from '@/packages/@mzhvv/utils/string'
import type { Expand } from '@/packages/@mzhvv/utils/types'

import type { IndexRouteObject, NonIndexRouteObject } from './foundation'

// #region Entrance / *Config

type StrictIndexRouteObjectConfig = { index: IndexRouteObject }
type StrictNonIndexRouteObjectConfig<
  Path extends string | undefined,
  Children = never,
  Key extends Path extends string ? Path : string = Path extends string
    ? AsCamelCase<Path>
    : string,
> = Expand<{
  [K in Key]: Omit<NonIndexRouteObject, 'path' | 'children'> & {
    path?: Path
    children?: Children
  }
}>

/**
 * @example
 * type Layout = StrictRouteConfigObject<undefined, Index | NonIndex, 'layout'>
 * type Index = StrictRouteConfigObject<'index'> // => { index: IndexRouteObjectConfig }
 * type NonIndex = StrictRouteConfigObject<'PATH'> // => StrictNonIndexRouteObjectConfig<...>
 * 
 * Возвращает: {
    layout: Omit<DefaultNonIndexRouteObject, 'children' | 'path'> & {
      path?: undefined
      children?:
        | IndexRouteObjectConfig
        | {
            about: Omit<DefaultNonIndexRouteObject, 'children' | 'path'> & {
              path?: 'PATH' | undefined
              children?: undefined
            }
          }
        | undefined
      }
    }
*/
export type StrictRouteObjectConfig<
  Path extends 'index' | string | undefined,
  Children = never,
  Key extends Path extends string ? CamelCase<Path> : string = Path extends string
    ? CamelCase<Path>
    : string,
> = Path extends 'index'
  ? StrictIndexRouteObjectConfig
  : StrictNonIndexRouteObjectConfig<Path, Children, Key>

// #endregion

// #region  Output / Return routesBuilder

//...

// #endregion

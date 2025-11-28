// src/core/shared/libs/router/types.ts

import type { NonIndexRouteObject } from 'react-router'
import type { CamelCase } from '@core/utils/string'

export type EntranceRoutesOf<Children> = Omit<NonIndexRouteObject, 'children'> & {
  children: Array<
    Omit<NonIndexRouteObject, 'children'> & {
      children: Array<Children[keyof Children]>
    }
  >
}

export type StrictRouteObjectOf<Path extends string, Children = never> = Record<
  CamelCase<Path>,
  Omit<NonIndexRouteObject, 'path' | 'children'> & {
    path: Path
    children?: Array<Children[keyof Children]>
  }
>

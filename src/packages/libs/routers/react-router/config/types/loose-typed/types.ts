// src/packages/@mzhvv/libs/routers/react-router/config/types/loose-typed/types.ts

import type { IndexRouteObject, NonIndexRouteObject } from 'react-router'

export type IndexRouteConfigObject = IndexRouteObject
export type NonIndexRouteConfigObject = Omit<NonIndexRouteObject, 'children'> & {
  children?: Record<string, RouteConfigObject>
}
export type RouteConfigObject = IndexRouteConfigObject | NonIndexRouteConfigObject
export type RouteConfig = Record<string, RouteConfigObject>

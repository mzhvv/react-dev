// src/react-dev/shared/global/libs/router/types.ts

import type { RouteObject, NonIndexRouteObject } from 'react-router'

export type ParentRouteObject<P extends string> = Omit<RouteObject, 'path'> & {
  path: P
}
export type ChildrenRouteObject<T extends string> = Omit<NonIndexRouteObject, 'path'> & { path: T }

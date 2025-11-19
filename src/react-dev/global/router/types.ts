// src/react-dev/global/router/types.ts

import type { IndexRouteObject, RouteObject } from 'react-router'

export type LayoutRouteObject<Path extends string> = Omit<RouteObject, 'path'> & {
  path: Path
}
export type IndexDomainRouteObject = IndexRouteObject

export type RootRouteObject<Path extends string> = Omit<RouteObject, 'path'> & {
  path: Path
}

export type DomainRouteObject<Path extends string> = Omit<RouteObject, 'path'> & {
  path: Path
}

export type PageRouteObject<Path extends string> = Omit<RouteObject, 'path'> & {
  path: Path
}

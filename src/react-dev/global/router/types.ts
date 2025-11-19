// src/react-dev/global/router/types.ts

import type { RouteObject } from 'react-router'

export type LayoutRouteObject = RouteObject

export type RootRouteObject<Path extends string> = Omit<RouteObject, 'path'> & {
  path: Path
}

export type DomainRouteObject<Path extends string> = Omit<RouteObject, 'path'> & {
  path: Path
}

export type PageRouteObject<Path extends string> = Omit<RouteObject, 'path'> & {
  path: Path
}

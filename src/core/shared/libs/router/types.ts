// src/core/shared/libs/router/types.ts

import type { RouteObject } from 'react-router'

export type StrictPathRouteObject<Path extends string> = Omit<RouteObject, 'path'> & {
  path: Path
}

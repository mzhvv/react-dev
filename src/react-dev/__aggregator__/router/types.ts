// src/react-dev/__global__/router/types.ts
/** @public - только ЧИСТЫЕ типы маршрутизации */

import type { RouteObject } from 'react-router'

export type StrictRouteObject<Path extends string> = Omit<RouteObject, 'path'> & {
  path: Path
}

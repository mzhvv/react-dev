// src/apps/routes-accumulate.ts

import type { RouteObject } from '@global/libs/router'

import { routesDashboard01 } from './dashboard-01'
import { routesPproject0 } from './project-0'

export const routesAccumulate = [
  ...routesDashboard01,
  ...routesPproject0,
] as const satisfies RouteObject[]

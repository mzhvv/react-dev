// src/apps/routes-accumulate.ts

import type { RouteObject } from '@router'

import { routesDashboard01 } from './dashboard-01'
import { routesPproject01 } from './project-01'

export const routesAccumulate = [
  ...routesDashboard01,
  ...routesPproject01,
] as const satisfies RouteObject[]

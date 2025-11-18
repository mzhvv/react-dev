// src/apps/accumulators/routes-accumulate.ts

import type { RouteObject } from 'react-router'

import { routesDashboard01 } from '@apps/dashboard-01'
import { routesPproject0 } from '@apps/project-0'
import { routesUi } from '@apps/ui'

export const routesAccumulate = [
  ...routesDashboard01,
  ...routesPproject0,
  ...routesUi,
] as const satisfies RouteObject[]

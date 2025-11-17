// src/apps/routes-accumulate.ts

import type { RouteObject } from 'react-router'

import { routesUi } from './ui'
import { routesPproject0 } from './project-0'
import { routesDashboard01 } from './dashboard-01'

export const routesAccumulate = [
  ...routesUi,
  ...routesPproject0,
  ...routesDashboard01,
] as const satisfies RouteObject[]

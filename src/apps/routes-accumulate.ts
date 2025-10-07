// src/apps/routes-accumulate.ts

import type { RouteObject } from '@router'

import { routesAboutReactDev } from './react-dev-about'
import { routesCollaboration } from './collaboration'
import { routesDashboard01 } from './dashboard-01'
import { routesPproject01 } from './project-01'

export const routesAccumulate = [
  ...routesAboutReactDev,
  ...routesCollaboration,
  ...routesDashboard01,
  ...routesPproject01,
] as const satisfies RouteObject[]

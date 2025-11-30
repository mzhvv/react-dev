// src/react-dev/__aggregator__/routes/index.ts

import type { RouteObject } from 'react-router'

import { routes as reactDevRoutes } from '@react-dev/app/routes'
import { appsRoutes } from '@apps/accumulators/routes'

const { children: reactDevChildren, ...reacrDev } = reactDevRoutes

export const routes = {
  ...reacrDev,
  children: [...reactDevChildren, ...appsRoutes],
} as const satisfies RouteObject

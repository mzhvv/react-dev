// src/react-dev/__aggregator__/routes.ts

import type { RouteObject } from 'react-router'

import { routes as reactDevRoutes } from '@react-dev/app/routes'
import { appsRoutes } from '@apps/accumulators/routes'

const { children: reactDevChildren, ...ReactDevLayout } = reactDevRoutes

export const routes = {
  ...ReactDevLayout,
  children: [...reactDevChildren, ...appsRoutes],
} as const satisfies RouteObject

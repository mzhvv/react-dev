// src/main/__aggregator__/routes.ts

import type { RouteObject } from 'react-router'
import { appsRoutes } from '@accumulator/routes'
import { routes as reactDevRoutes } from '@main/app/routes'

const { children: reactDevChildren, ...ReactDevLayout } = reactDevRoutes

export const routes = {
  ...ReactDevLayout,
  children: [...reactDevChildren, ...appsRoutes],
} as const satisfies RouteObject

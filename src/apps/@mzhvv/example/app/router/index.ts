// src/apps/@mzhvv/example/app/router/index.ts

import type { RouteObject } from 'react-router'

import { routes as basicIntegrationRoutes } from './routes/basic-integration'

type RoutesVersion = 'basicIntegration'

const routersMap = {
  basicIntegration: basicIntegrationRoutes satisfies RouteObject,
} as const satisfies Record<RoutesVersion, unknown> // unknown гарантирует только правильность ключей, не вмешиваясь в типы значений

export function getRoutes(version: RoutesVersion) {
  return {
    routes: routersMap[version],
  }
}

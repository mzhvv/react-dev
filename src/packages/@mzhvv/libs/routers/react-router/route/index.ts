// src/packages/@mzhvv/router/routes/index.ts

import type { RoutesConfig, RouteObject } from './types/foundation'
import { builderRoutesV0 } from './builder'

export const routesBuilderVersions = {
  v0: function <RoutesConfigEntrance extends RoutesConfig, RoutesConfigOutput extends RouteObject>(
    routesConfig: RoutesConfigEntrance
  ): RoutesConfigOutput {
    return builderRoutesV0<RoutesConfigEntrance, RoutesConfigOutput>(routesConfig)
  },
}

export const routesBuilder = routesBuilderVersions.v0

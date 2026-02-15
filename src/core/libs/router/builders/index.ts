// src/core/libs/router/builders/index.ts

import type { RoutesConfig, RouteObject } from '../types/foundation'
import { builderRoutesV0 } from '../builders/routes' // явный импорт с выходом из папки, чтобы понимать структуру

export const routesBuilderVersions = {
  // v0: function <RoutesConfigEntrance extends RoutesConfig, RoutesConfigOutput extends RouteObject>(
  //   routesConfig: RoutesConfigEntrance
  // ): RoutesConfigOutput {
  //   return builderRoutesV0<RoutesConfigEntrance, RoutesConfigOutput>(routesConfig)
  // },

  v0: function <E extends RoutesConfig, O extends RouteObject>(config: E): O {
    return builderRoutesV0<E, O>(config)
  },
}

export const routesBuilder = routesBuilderVersions.v0

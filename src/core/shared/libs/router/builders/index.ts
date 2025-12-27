// src/core/shared/libs/router/builders/index.ts

import type { RouteObject } from 'react-router'
import type { RouteConfigObject } from '../types'
import { builderRoutes } from './build-routes'

export const routesBuilder = {
  v0: function <Entrance extends RouteConfigObject, Output extends RouteObject[]>(
    routesConfig: Entrance
  ) {
    return {
      routes: builderRoutes.buildRoutes<Entrance, Output>(routesConfig),
    }
  },
}

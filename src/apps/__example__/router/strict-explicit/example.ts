// src/core/libs/router/__experience__/strict-explicit/example.ts

import type { RouteConfig, RouteObject } from '../../../../core/libs/router/types/foundation'
import { routesBuilder } from '../../../../core/libs/router/builders'

import type { RoutesObjectConfig, RoutesTuple, Routes2 } from './types'

type RoutesObject = RoutesTuple & Routes2

const routesConfig = {
  coreLibsRouterTypesStrictExplicit: {
    path: 'core-libs-router-types-strict-explicit',
    children: {
      // Примеры / mock

      // 1. Index как fallback. index(fallback), явный path(layout)
      domain1: {
        path: 'domain-1',
        // element: <Outlet />
        children: {
          index: { index: true }, // не может являться сегментом
          // domain1Segment1 ...
        },
      },

      // 2. First-child как fallback. Без index, layout undefined, явный path(fallback children[0])
      domain2: {
        path: undefined,
        // element: Outlet(react-router) возвращает по умолчанию <Outlet>{children[0]}<Outlet />
        children: {
          fallbackDomain2: { path: 'domain-2' }, // является domain2Segment1
          // domain2Segment2 ...
        },
      },

      // 3, Вложенность
      domain3: {
        path: 'domain-3',
        children: {
          index: { index: true },

          // 3.1. Index как fallback
          domain3Segment1: {
            path: 'domain-3-segment-1',
            children: {
              index: { index: true },
              domain3Segment1Page1: { path: 'domain-3-segment-1-page-1' },
            },
          },

          // 3.2. First-child как fallback
          domain3Segment2: {
            path: 'domain-3-segment-2',
            children: {
              domain3Segment2FirstChildFallback: {
                path: 'domain-3-segment-2-first-child-fallback',
              },
              domain3Segment2Page1: { path: 'domain-3-segment-2-page-1' },
            },
          },
        },
      },
    },
  },
} as const satisfies RouteConfig & RoutesObjectConfig

export const routes = routesBuilder.v0<RoutesObjectConfig, RoutesObject>(routesConfig)

// Захардкоженный routes / mock
export const hardcodedRoutes = {
  path: undefined,
  children: [
    {
      path: 'core-libs-router-types-strict-explicit',
      children: [
        { index: true },
        {
          path: 'domain-1',
          children: [{ path: 'domain-3-segment-1' }, { path: 'domain-3-segment-2' }],
        },
      ],
    },
  ],
} as const satisfies RouteObject & typeof routes // routes: RoutesObject

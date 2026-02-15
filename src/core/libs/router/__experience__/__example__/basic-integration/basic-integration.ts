// src/core/libs/router/__experience__/__example__/basic-integration/basic-integration.ts

/* 📌
 Базовая инергация с react-router 
 
 ...
*/

import type { RouteObject, RoutesConfig } from '../../../types/foundation'
import {
  routesBuilder,
  // routesBuilderVersions
} from '../../../builders'

type RoutesConfigEntrance = RoutesConfig
type RoutesConfigOutput = RouteObject

export const routesConfig = {
  provider: {
    path: undefined,
    children: {
      exampleCoreLibsRouterTypesDefault: {
        path: 'example-core-libs-router-types-default',
        children: {
          index: { index: true },

          // Примеры / mock

          // 1. Index как fallback. index(fallback), явный path(layout)
          domain1: {
            path: 'domain-1',
            element: 'outlet', // <Outlet />
            children: {
              index: { index: true }, // не может являться сегментом
              // domain1Segment1 ...
            },
          },
          // 2. First-child как fallback. Без index, layout undefined, явный path(fallback children[0])
          domain2: {
            path: undefined,
            element: 'outlet', // <Outlet />
            children: {
              domain3FirstChildFallback: { path: 'domain-2' }, // является domain2Segment1
              // domain2Segment2 ...
            },
          },

          // 3, Вложенность (Для экспериментов)
          domain3: {
            path: 'domain-3',
            children: {
              index: { index: true },

              domain3Segment1: {
                path: 'domain-3-segment-1',
                children: {
                  index: { index: true },
                  domain3Segment1Page1: { path: 'domain-3-segment-1-page-1' },
                },
              },

              domain3Segment2: {
                path: undefined,
                children: {
                  domain3Segment2FirstChildFallback: {
                    path: 'domain-3-segment-2',
                  },
                  domain3Segment2Page1: { path: 'domain-3-segment-2-page-1' },
                },
              },
            },
          },
        },
      },
    },
  },
} as const satisfies RoutesConfigEntrance

export const routes = routesBuilder<RoutesConfigEntrance, RoutesConfigOutput>(routesConfig)
// export const routesV0 = routesBuilderVersions.v0<RoutesConfigEntrance, RoutesConfigOutput>(
//   routesConfig
// )

// #region 🧪 ДЛЯ ТЕСТИРОВАНИЯ

// Захардкоженный эталонный routes / mock

export const hardcodedReferenceRoutes = {
  path: undefined,
  children: [
    {
      path: 'example-core-libs-router-types-default',
      children: [
        { index: true },
        { path: 'domain-1', element: 'outlet', children: [{ index: true }] },
        { path: undefined, element: 'outlet', children: [{ path: 'domain-2' }] },
        {
          path: 'domain-3',
          children: [
            { index: true },
            {
              path: 'domain-3-segment-1',
              children: [{ index: true }, { path: 'domain-3-segment-1-page-1' }],
            },
            {
              path: undefined,
              children: [{ path: 'domain-3-segment-2' }, { path: 'domain-3-segment-2-page-1' }],
            },
          ],
        },
      ],
    },
  ],
} as const satisfies RoutesConfigOutput

// #endregion

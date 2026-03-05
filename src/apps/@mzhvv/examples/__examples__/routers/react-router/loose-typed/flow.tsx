// src/apps/@mzhvv/examples/__examples__/routers/react-router/loose-typed/flow.tsx

/* 📌
  looseTypes
*/

// #region config

import { Outlet } from 'react-router'
import type { RouteConfig } from '@mzhvv/routers/react-router/config/types/loose-typed'

export const routeConfig = {
  looseTyped: {
    path: 'loose-typed',
    children: {
      index: { index: true },

      // Примеры / mock

      // 1. Index как fallback. index(fallback), явный path(layout)
      domain1: {
        path: 'domain-1',
        element: <Outlet />,
        children: {
          index: { index: true }, // не может являться сегментом
          // domain1Segment1 ...
        },
      },
      // 2. First-child как fallback. Без index, layout undefined, явный path(fallback children[0])
      domain2: {
        path: undefined,
        element: <Outlet />,
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
} as const satisfies RouteConfig

// #endregion

// #region route

import { routesBuilder } from '@mzhvv/routers/react-router/route'
export const builtRoute = routesBuilder(routeConfig)

// #endregion
// #region route 🧪 ДЛЯ ТЕСТИРОВАНИЯ

import type { RouteObject } from 'react-router'

/** Эталонный builtRoute/looseTypesRoute */
export const referenceRoute = {
  path: 'loose-typed',
  children: [
    { index: true },
    { path: 'domain-1', element: <Outlet />, children: [{ index: true }] },
    { path: undefined, element: <Outlet />, children: [{ path: 'domain-2' }] },
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
} as const satisfies RouteObject

// #endregion

// region navigation
// #endregion
// region navigation/constants
// #endregion

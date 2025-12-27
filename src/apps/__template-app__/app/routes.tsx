// src/apps/__template-app__/app/routes.tsx

import { Outlet } from 'react-router'

import { routesBuilder } from '@core/libs/router'

import type { Routes, Routes2, StrictRouteConfig } from '@template-app/shared/types/prnc'

import { Providers } from '@template-app/app/providers'
import { TemplateAppLayout } from '@template-app/pages/template-app-layout'
import { TemplateApp } from '@template-app/pages/template-app'

const routesConfig = {
  provider: {
    path: undefined,
    element: <Providers />,
    children: {
      templateApp: {
        path: 'template-app',
        element: <TemplateAppLayout />,
        children: {
          index: {
            index: true,
            element: <TemplateApp />,
          },
          testDomain: {
            path: 'test-domain',
            element: <Outlet />,
            children: {
              testSegment1: {
                path: 'test-segment-1',
                element: 'test-segment-1',
              },
              testSegment2: {
                path: 'test-segment-2',
                element: 'test-segment-2',
              },
            },
          },
        },
      },
    },
  },
} as const satisfies StrictRouteConfig

export const { routes } = routesBuilder.v0<StrictRouteConfig, Routes & Routes2>(routesConfig)

// @ts-expect-error 6133
const routes_example = [
  {
    path: undefined,
    element: <Providers />,
    children: [
      {
        path: 'template-app',
        element: <TemplateAppLayout />,
        children: [
          {
            index: true,
            element: <TemplateApp />,
          },
          {
            path: 'test-domain',
            element: <Outlet />,
            children: [
              { path: 'test-segment-1', element: 'test-segment-1' },
              { path: 'test-segment-2', element: 'test-segment-2' },
            ],
          },
        ],
      },
    ],
  },
] as const satisfies Routes & Routes2

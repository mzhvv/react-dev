// src/apps/__template-app-experience__/app/routes.tsx

import { Outlet } from 'react-router'

import { routesBuilder } from '@core/libs/router'

import type { StrictRouteConfig, RoutesOutput } from '../shared/types/prnc'

import { Providers } from '../app/providers'
import { TemplateAppLayout } from '../pages/template-app-layout'
import { TemplateApp } from '../pages/template-app'

const routesConfig = {
  provider: {
    path: undefined,
    element: <Providers />,
    children: {
      templateAppExperience: {
        path: 'template-app-experience',
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

export const { routes } = routesBuilder.v0<StrictRouteConfig, RoutesOutput>(routesConfig)

// @ts-expect-error 6133
const routes2 = [
  {
    path: undefined,
    element: <Providers />,
    children: [
      {
        path: 'template-app-experience',
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
] as const satisfies RoutesOutput[]

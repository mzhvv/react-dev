// src/apps/__template-app__/app/routes.tsx

import { Outlet } from 'react-router'

import { routesBuilder } from '@mzhvv/libs/routers/react-router/route'

import type { RoutesOutput, StrictRouteConfig } from '@apps/@mzhvv/template-app/shared/types/prnc'

import { Providers } from '@apps/@mzhvv/template-app/app/providers'
import { TemplateAppLayout } from '@apps/@mzhvv/template-app/pages/template-app-layout'
import { TemplateApp } from '@apps/@mzhvv/template-app/pages/template-app'

const routesConfig = {
  provider: {
    path: undefined,
    element: <Providers />, // при необходимости! по умолчанию Providers => <Outlet />
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

export const { routes } = routesBuilder<StrictRouteConfig, RoutesOutput>(routesConfig)

// @ts-expect-error 6133
const routes2 = [
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
] as const satisfies RoutesOutput[]

// src/core/libs/router/__example__/unit/unit.ts

import type { RoutesConfig } from './types'

// @ts-expect-error 6133
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routesConfig = {
  provider: {
    path: undefined,
    element: '<Providers />',
    children: {
      example: {
        path: 'example',
        element: '<Example />',
        children: {
          index: {
            index: true,
            element: '<TemplateApp />',
          },
          domain: {
            path: 'domain',
            element: '<Outlet />',
            children: {
              segment1: {
                path: 'segment-1',
                element: '<Segment1 />',
              },
              segment2: {
                path: 'segment-2',
                element: '<Segment2 />',
              },
            },
          },
        },
      },
    },
  },
} as const satisfies RoutesConfig

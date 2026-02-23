// src/react-dev/app/routes.tsx

import type { RouteObject } from 'react-router'

// import { LoadingFallback } from '@ui/components/fallback'

import { ReactDevPage } from '@react-dev/pages/react-dev'
import { ReactDevLayout } from '@react-dev/pages/react-dev-layout'

export const routes = {
  path: undefined,
  element: <ReactDevLayout />,
  hydrateFallbackElement: <></>, // <LoadingFallback message='Loading hydrate ...' />,
  children: [{ path: '/', element: <ReactDevPage /> }],
} as const satisfies RouteObject

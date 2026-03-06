// src/main/app/route.tsx

import type { NonIndexRouteObject } from 'react-router'

// import { LoadingFallback } from '@ui/components/fallback'

import { ReactDevLayout } from '@main/pages/react-dev-layout'

export const mainRoute = {
  path: undefined,
  element: <ReactDevLayout />,
  hydrateFallbackElement: <></>, // <LoadingFallback message='Loading hydrate ...' />,
} as const satisfies Omit<NonIndexRouteObject, 'children'>

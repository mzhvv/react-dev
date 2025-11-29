// src/react-dev/app/router.tsx

import type { RouteObject } from 'react-router'
import { createBrowserRouter, RouterProvider } from 'react-router'

// import { LoadingFallback } from '@ui/components/fallback'

import { appsRoutes } from '@apps/accumulators/routes'
import { ReactDevPage } from '@react-dev/pages/react-dev'
import { ReactDevLayout } from '@react-dev/widgets/react-dev-layout'

const routes = {
  path: undefined,
  element: <ReactDevLayout />,
  hydrateFallbackElement: <></>, // <LoadingFallback message='Loading hydrate ...' />,
  children: [{ path: '/', element: <ReactDevPage /> }, ...appsRoutes],
}

const router = createBrowserRouter([routes] as const satisfies RouteObject[])
export const Router = () => <RouterProvider router={router} />

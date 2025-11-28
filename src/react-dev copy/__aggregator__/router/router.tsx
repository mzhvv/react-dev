// src/react-dev/__aggregator__/router/router.tsx

import type { RouteObject } from 'react-router'
import { createBrowserRouter, RouterProvider } from 'react-router'

// import { LoadingFallback } from '@ui/components/fallback'

import { rootRoute, reactDevDomainRoutes } from '@react-dev/app/routes'
import { routesAccumulate as accumulateRoutesProjects } from '@accumulators/routes'

const { children: rootRoutes, ...rootLayout } = rootRoute

const routes = [
  {
    ...rootLayout,
    hydrateFallbackElement: <></>, // <LoadingFallback message='Loading hydrate ...' />,
    children: [...rootRoutes, ...Object.values(reactDevDomainRoutes), ...accumulateRoutesProjects],
  },
] as const satisfies RouteObject[]

export const router = createBrowserRouter(routes)
export const Router = () => <RouterProvider router={router} />

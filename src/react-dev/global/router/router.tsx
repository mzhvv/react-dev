// src/react-dev/shared/global/libs/router/router.tsx

import type { RouteObject } from 'react-router'
import { createBrowserRouter, RouterProvider } from 'react-router'

// import { LoadingFallback } from '@ui/components/fallback'

import { routesReactDev } from '@react-dev/app/routes'
import { routesAccumulate as accumulateRoutesProjects } from '@apps'

const { children: childrenRoutesReactDev, ...restRoutesReactDev } = routesReactDev

const routes = [
  {
    ...restRoutesReactDev,
    hydrateFallbackElement: <></>, // <LoadingFallback message='Loading hydrate ...' />,
    children: [...childrenRoutesReactDev, ...accumulateRoutesProjects],
  },
] as const satisfies RouteObject[]

export const router = createBrowserRouter(routes)
export const Router = () => <RouterProvider router={router} />

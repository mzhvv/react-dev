// src/libs/router/router.tsx

import type { RouteObject } from 'react-router'
import { createBrowserRouter, RouterProvider } from 'react-router'

import { routesAccumulate as accumulateRoutesProjects } from '@apps'
import { routesReactDev } from '@react-dev'

const { children: childrenRoutesReactDev, ...restRoutesReactDev } = routesReactDev

// prettier-ignore
const routes = [
  {
    ...restRoutesReactDev, children: [
      ...childrenRoutesReactDev, ...accumulateRoutesProjects
    ],
  },
] as const satisfies RouteObject[]

export const router = createBrowserRouter(routes)
export const Router = () => <RouterProvider router={router} />

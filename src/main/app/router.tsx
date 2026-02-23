// src/main/app/router.tsx

import type { RouteObject } from 'react-router'
import { createBrowserRouter, RouterProvider } from 'react-router'

import { routes } from '@aggregators/routes'

const router = createBrowserRouter([routes] as const satisfies RouteObject[])
export const Router = () => <RouterProvider router={router} />

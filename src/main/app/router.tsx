// src/react-dev/app/router.tsx

import type { RouteObject } from 'react-router'
import { createBrowserRouter, RouterProvider } from 'react-router'

import { routes } from '@react-dev/__aggregator__/routes'

const router = createBrowserRouter([routes] as const satisfies RouteObject[])
export const Router = () => <RouterProvider router={router} />

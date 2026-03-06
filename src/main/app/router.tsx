// src/main/app/router.tsx

import type { RouteObject } from 'react-router'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { route } from '@aggregator/route'

const router = createBrowserRouter(route satisfies RouteObject[])
export const Router = () => <RouterProvider router={router} />

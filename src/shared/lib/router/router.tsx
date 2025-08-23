// src/shared/lib/router/router.tsx

import { createBrowserRouter, RouterProvider } from 'react-router'
import { configRouter } from './config'

export const router = createBrowserRouter(configRouter)
export const Router = () => <RouterProvider router={router} />

// src/main/app/router.tsx

import { createBrowserRouter, RouterProvider } from 'react-router'

import { route } from '@aggregator/route'

/* ⚠️ Проверка `route` не требуется! */

const router = createBrowserRouter(route)
export const Router = () => <RouterProvider router={router} />

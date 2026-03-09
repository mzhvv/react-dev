// src/main/app/router.tsx

import { createBrowserRouter, RouterProvider } from 'react-router'

import { globalRoute } from '@aggregator/route'

/* ✅ Проверка `globalRoute` не требуется! */

const router = createBrowserRouter(globalRoute)
export const Router = () => <RouterProvider router={router} />

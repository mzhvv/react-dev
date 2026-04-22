// src/main/app/router.tsx

import { createBrowserRouter, RouterProvider } from 'react-router'

import { appsRoute } from '@aggregator'

import { mainRoute } from './route'

export const route = [
  {
    ...mainRoute,
    children: appsRoute,
  },
]

export const Router = () => <RouterProvider router={createBrowserRouter(route)} />

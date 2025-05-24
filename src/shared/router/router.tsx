// src/shared/router/router.tsx

import { createBrowserRouter, RouterProvider } from 'react-router'

import { AppLayout } from '@/widgets/layouts/app-layout'
import { MainPage } from '@/pages/main'
import { DraftsLayout } from '@/widgets/layouts/drafts-layout'
import { ReduxCardsLayout } from '@/widgets/layouts/redux-cards-layout'
import { CountersPage } from '@/pages/counters'
import { CardsNoReqPage, CardsReqCompPage } from '@/pages/redux-cards'
import { CardsListThunk, CardItemThunk } from '@/modules/redux-cards'
import { ProductsLayout } from '@/widgets/layouts/products-layout'
import { CMSProductsPage } from '@/pages/redux-products'

import type { ReduxCardsRoutes } from './constants'

export const reduxCardsRoutes = {
  element: <ReduxCardsLayout />,
  path: 'redux-cards',
  children: [
    { path: 'no-req', element: <CardsNoReqPage /> },
    { path: 'req-comp', element: <CardsReqCompPage /> },
    { path: 'thunk', element: <CardsListThunk /> },
    { path: 'thunk/:id', element: <CardItemThunk /> },
  ],
} satisfies ReduxCardsRoutes

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <MainPage /> },

      {
        element: <DraftsLayout />,
        path: 'drafts',
        children: [
          { path: 'counters', element: <CountersPage /> },
          reduxCardsRoutes,
          // {
          //   element: <ReduxCardsLayout />,
          //   path: 'redux-cards',
          //   children: [
          //     { path: 'no-req', element: <CardsNoReqPage /> },
          //     { path: 'req-comp', element: <CardsReqCompPage /> },
          //     { path: 'thunk', element: <CardsListThunk /> },
          //     { path: 'thunk/:id', element: <CardItemThunk /> },
          //   ],
          // } satisfies ReduxCardsRoutes,
        ],
      },

      {
        element: <ProductsLayout />,
        path: 'products',
        children: [{ path: 'cms-products', element: <CMSProductsPage /> }],
      },
    ],
  },
])

export const Router = () => <RouterProvider router={router} />

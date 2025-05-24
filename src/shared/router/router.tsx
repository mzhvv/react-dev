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
import { REDUX_CARDS_PREFIX, REDUX_CARDS_PATHS, PREFIX_GROUPS } from './constants'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <MainPage /> },

      {
        element: <DraftsLayout />,
        path: PREFIX_GROUPS.DRAFTS,
        children: [
          { path: 'counters', element: <CountersPage /> },
          {
            element: <ReduxCardsLayout />,
            path: REDUX_CARDS_PREFIX,
            children: [
              { path: REDUX_CARDS_PATHS.NO_REQ, element: <CardsNoReqPage /> },
              { path: REDUX_CARDS_PATHS.REQ_COMP, element: <CardsReqCompPage /> },
              { path: REDUX_CARDS_PATHS.THUNK, element: <CardsListThunk /> },
              { path: REDUX_CARDS_PATHS.THUNK_ID, element: <CardItemThunk /> },
            ],
          } satisfies ReduxCardsRoutes,
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

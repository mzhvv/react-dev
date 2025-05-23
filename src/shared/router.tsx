import { BrowserRouter, Routes, Route } from 'react-router'

import { AppLayout } from '@/widgets/layouts/app-layout'
import { MainPage } from '@/pages/main'

import { DraftsLayout } from '@/widgets/layouts/drafts-layout'
import { ReduxCardsLayout } from '@/widgets/layouts/redux-cards-layout'

import { CountersPage } from '@/pages/counters'
import { CardsNoReqPage, CardsReqCompPage } from '@/pages/redux-cards'

import { ProductsLayout } from '@/widgets/layouts/products-layout'
import { CMSProductsPage } from '@/pages/redux-products'
import { CardItemReduxThunk } from '@/modules/redux-cards/thunk/card-item'
import { CardsListReduxThunk } from '@/modules/redux-cards/thunk/cards-list'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<MainPage />} />

          <Route element={<DraftsLayout />}>
            <Route path='/drafts/counters' element={<CountersPage />} />
            <Route element={<ReduxCardsLayout />}>
              <Route path='/drafts/cards/no-req' element={<CardsNoReqPage />} />
              <Route path='/drafts/cards/req-comp' element={<CardsReqCompPage />} />

              <Route path='/drafts/cards/thunk' element={<CardsListReduxThunk />} />
              <Route path='/drafts/cards/thunk/:id' element={<CardItemReduxThunk />} />
            </Route>
          </Route>

          <Route element={<ProductsLayout />}>
            <Route path='/products/cms-products' element={<CMSProductsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router'

import { AppLayout } from '@/widgets/layouts/app-layout'
import { MainPage } from '@/pages/main'

import { DraftsLayout } from '@/widgets/layouts/drafts-layout'
import { CardsLayout } from '@/widgets/layouts/cards-layout'

import { CountersPage } from '@/pages/counters'
import { CardsNoReqPage, CardsReqCompPage, CardsReqFuncPage } from '@/pages/cards'

import { ProductsLayout } from '@/widgets/layouts/products-layout'
import { CMSProductsPage } from '@/pages/products'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<MainPage />} />

          <Route element={<DraftsLayout />}>
            <Route path='/drafts/counters' element={<CountersPage />} />
            <Route element={<CardsLayout />}>
              <Route path='/drafts/cards/no-req' element={<CardsNoReqPage />} />
              <Route path='/drafts/cards/req-comp' element={<CardsReqCompPage />} />
              <Route path='/drafts/cards/req-func' element={<CardsReqFuncPage />} />
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

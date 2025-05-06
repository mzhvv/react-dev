import { BrowserRouter, Routes, Route } from 'react-router'

import { AppLayout } from '@/widgets/app-layout'
import { MainPage } from '@/pages/main'
import { ProductsLayout } from '@/widgets/products-layout'
import { CMSProductsPage } from '@/pages/products'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<MainPage />} />

          <Route element={<ProductsLayout />}>
            <Route path='/cms-products' element={<CMSProductsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

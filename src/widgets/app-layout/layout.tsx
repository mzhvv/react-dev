// src/widgets/app/layout.tsx

import { Outlet } from 'react-router'

import { AppHeader } from './header'
import { AppFooter } from './footer'

export const AppLayout: React.FC = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  )
}

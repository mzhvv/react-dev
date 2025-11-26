// src/apps/ui/pages/ui-layout.tsx

import { Outlet } from 'react-router'
import { Header } from '@ui/layout-system'

import { ReactdevHeading } from '@apps/ui/widgets/heading'

export const UiLayout = () => {
  return (
    <div>
      <Header>
        <ReactdevHeading />
      </Header>
      <Outlet />
    </div>
  )
}

import { Outlet } from 'react-router'
import { Header } from '@ui/layout-system'
import { ReactdevHeading } from '../widgets/heading'

export const UiLayout = () => {
  return (
    <>
      <Header>
        <ReactdevHeading />
      </Header>
      <Outlet />
    </>
  )
}

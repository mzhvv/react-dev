import { Main, Header } from '@ui/layout-system'
import { Outlet } from 'react-router'

export const UiLayout = () => {
  return (
    <>
      <Main>
        <Header>
          <h1>ui-list</h1>
        </Header>
        <Outlet />
      </Main>
    </>
  )
}

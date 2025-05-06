import { Container } from '@/shared/ui'
import { useLocation } from 'react-router'

export const HeaderPathname = () => {
  const { pathname } = useLocation()
  const header = pathname === '/' ? 'react-dev' : pathname.slice(1)
  return (
    <Container.Component asElement='header'>
      <Container.Slot className='flex items-center justify-center'>
        <h1>{header}</h1>
      </Container.Slot>
    </Container.Component>
  )
}

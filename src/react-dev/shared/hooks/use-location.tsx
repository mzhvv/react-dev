import { useLocation as useRouterLocation } from 'react-router'

export const useLocation = () => {
  const location = useRouterLocation()

  const isHome = location.pathname === '/'

  return {
    pathname: location.pathname,
    isHome,
  }
}

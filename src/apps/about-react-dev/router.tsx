import type { RouteObject } from '@router'

import type { Path } from './types'
import { AboutReactDevPage } from './page'

export const routesAboutReactDev = [
  {
    path: 'about-react-dev',
    element: <AboutReactDevPage />,
  },
] as const satisfies RouteObject<Path>[]

//

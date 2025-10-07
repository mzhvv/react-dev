import type { RouteObject } from '@router'

import type { Path } from './types'
import { Collaboration } from './page'

export const routesCollaboration = [
  {
    path: 'collaboration',
    element: <Collaboration />,
  },
] as const satisfies RouteObject<Path>[]

//

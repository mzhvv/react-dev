import type { RouteObject } from '@global/libs/router'

import type { Path } from './types'
import { Project0Page } from './page'

export const routesPproject0 = [
  {
    path: 'project-0',
    element: <Project0Page />,
  },
] as const satisfies RouteObject<Path>[]

//

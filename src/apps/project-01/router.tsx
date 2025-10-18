import type { RouteObject } from '@global/libs/router'

import type { Path } from './types'
import { Project01Page } from './page'

export const routesPproject01 = [
  {
    path: 'project-01',
    element: <Project01Page />,
  },
] as const satisfies RouteObject<Path>[]

//

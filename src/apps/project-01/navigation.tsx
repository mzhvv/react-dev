import type { NavigationLink } from '@global/navigation'

import type { Path } from './types'

export const navigationPproject01 = [
  { path: '/project-01', title: 'project-01' },
] as const satisfies NavigationLink<Path>[]

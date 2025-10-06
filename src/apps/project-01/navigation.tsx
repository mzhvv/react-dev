import type { NavigationObject } from '@navigation'

import type { Path } from './types'

export const navigationPproject01 = [
  { path: '/projects/project-01', title: 'project-01' },
] as const satisfies NavigationObject<`/projects/${Path}`>[]

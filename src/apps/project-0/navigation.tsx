// src/apps/project-0/navigation.tsx

import type { NavigationLink } from '@global/libs/navigation'

import type { Path } from './types'

export const navigationPproject0 = [
  { path: '/project-0', title: 'project-0' },
] as const satisfies NavigationLink<Path>[]

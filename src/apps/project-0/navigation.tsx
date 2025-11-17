// src/apps/project-0/navigation.tsx

import type { NavigationLink } from '@global/libs/navigation'

import type { ParentRoutePath } from './types/router-and-navigation'

export const navigationPproject0 = [
  { path: '/project-0', title: 'project-0' },
] as const satisfies NavigationLink<ParentRoutePath>[]

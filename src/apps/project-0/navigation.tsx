// src/apps/project-0/navigation.tsx

import type { NavigationParentPath } from '@global/libs/navigation'
import type { ParentRoutePath } from './types/router-and-navigation'

export const navigationPproject0 =
  '/project-0' as const satisfies NavigationParentPath<ParentRoutePath>

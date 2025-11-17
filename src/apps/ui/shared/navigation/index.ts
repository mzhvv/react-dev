// src/apps/ui/shared/navigation.tsx

import type { ChildrenNavigationPath } from '@global/libs/router/types'
import type {
  ParentRoutePath,
  ChildrenRoutePaths,
} from '@apps/ui/shared/types/router-and-navigation'
import type { NavigationLink } from '@global/libs/navigation'

/** для src/apps/ui/... */
export const navigation = ['/ui/radio-group'] as const satisfies ChildrenNavigationPath<
  ParentRoutePath,
  ChildrenRoutePaths
>[]

/** для src/apps/navigation-accumulate.ts */
export const navigationUi = {
  path: '/ui',
  title: 'ui',
} as const satisfies NavigationLink<ParentRoutePath>

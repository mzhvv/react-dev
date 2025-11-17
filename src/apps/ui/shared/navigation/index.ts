// src/apps/ui/shared/navigation.tsx

import type { NavigationChildrenPath, NavigationLink } from '@global/libs/navigation'

import type {
  ParentRoutePath,
  ChildrenRoutePaths,
} from '@apps/ui/shared/types/router-and-navigation'

/** для src/apps/ui/... */
export const navigation = ['/ui/radio-group'] as const satisfies NavigationChildrenPath<
  ParentRoutePath,
  ChildrenRoutePaths
>[]

/** для src/apps/navigation-accumulate.ts */
export const navigationUi = {
  path: '/ui',
  title: 'ui',
} as const satisfies NavigationLink<ParentRoutePath>

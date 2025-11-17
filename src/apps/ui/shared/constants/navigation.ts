// src/apps/ui/shared/constants/navigation.ts

import type { NavigationLink } from '@global/libs/navigation'
import type { NavigationChildrenPath } from '@global/libs/navigation'
import type {
  ParentRoutePath,
  ChildrenRoutePaths,
} from '@apps/ui/shared/types/router-and-navigation'

type NavigationObject = { title: string }

/** для src/apps/ui/... */
export const NAVIGATION = {
  '/ui/radio-group': { title: 'radio-group' },
} satisfies Record<NavigationChildrenPath<ParentRoutePath, ChildrenRoutePaths>, NavigationObject>

/** для src/apps/constants-accumulate.ts */
export const NAVIGATION_UI = [
  { path: '/ui', title: 'ui' },
] as const satisfies NavigationLink<ParentRoutePath>[]

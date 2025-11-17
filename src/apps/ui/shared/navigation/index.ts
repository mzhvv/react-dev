// src/apps/ui/shared/navigation.tsx

import type { NavigationChildrenPath, NavigationParentPath } from '@global/libs/navigation'
import type { ParentRoutePath, ChildrenRoutePaths } from '../types/router-and-navigation'

export const navigationUi = '/ui' as const satisfies NavigationParentPath<ParentRoutePath>

export const navigation = ['/ui/radio-group'] as const satisfies NavigationChildrenPath<
  ParentRoutePath,
  ChildrenRoutePaths
>[]

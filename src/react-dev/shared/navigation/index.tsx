// src/react-dev/shared/libs/navigation/index.tsx

import type { NavigationParentPath, NavigationSectionKey } from '@global/navigation/types'
import type { ParentRoutePath } from '../types/router-and-navigation'

export const navigationReactDev = {
  application: ['/', '/about'],
  author: ['/collaboration'],
  projects: [],
  development: ['/ui-component-variants'],
} as const satisfies Record<
  NavigationSectionKey,
  Array<'/' | NavigationParentPath<ParentRoutePath>>
>

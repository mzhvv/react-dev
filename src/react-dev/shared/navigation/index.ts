// src/react-dev/shared/navigation/index.ts

import type { DomainPathNavigation, SectionNavigationKey } from '@global/navigation/types'
import type { RootRoutePath, DomainRoutePath } from '@react-dev/shared/types'

export const reactDevNavigation = {
  application: ['/', '/about'],
  author: ['/collaboration'],
  projects: [],
  development: ['/ui-component-variants'],
} as const satisfies Record<
  SectionNavigationKey,
  Array<RootRoutePath | DomainPathNavigation<DomainRoutePath>>
>

// src/react-dev/shared/navigation/index.tsx

import type { DomainPathNavigation, SectionKeyNavigation } from '@global/navigation/types'
import type { RootRoutePath, DomainRoutePath } from '@react-dev/shared/types'

export const reactDevNavigation = {
  application: ['/', '/about'],
  author: ['/collaboration'],
  projects: [],
  development: ['/ui-component-variants'],
} as const satisfies Record<
  SectionKeyNavigation,
  Array<RootRoutePath | DomainPathNavigation<DomainRoutePath>>
>

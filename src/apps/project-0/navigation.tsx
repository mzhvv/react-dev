// src/apps/project-0/navigation.tsx

import type { DomainPathNavigation } from '@global/navigation'
import type { DomainRoutePath } from '@apps/project-0/types'

type Project0DomainNavigation = DomainPathNavigation<DomainRoutePath>[]

export const project0DomainNavigation = ['/project-0'] as const satisfies Project0DomainNavigation

export const project0Navigation = [...project0DomainNavigation] as const

// src/apps/dashboard-01/navigation.ts

import type { DomainPathNavigation } from '@global/navigation'
import type { DomainRoutePath } from '@apps/dashboard-01/types'

type Dashboard01DomainNavigation = DomainPathNavigation<DomainRoutePath>[]

export const dashboard01DomainNavigation = [
  '/dashboard-01',
] as const satisfies Dashboard01DomainNavigation

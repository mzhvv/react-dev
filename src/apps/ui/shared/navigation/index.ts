// src/apps/ui/shared/navigation/index.ts

import type { DomainPathNavigation, PagePathNavigation } from '@global/navigation'
import type { DomainRoutePath, PageRoutePath } from '@apps/ui/shared/types'

type UiDomainNavigation = DomainPathNavigation<DomainRoutePath>[]
type UiPagesNavigation = PagePathNavigation<DomainRoutePath, PageRoutePath>[]

export const uiDomainsNavigation = ['/ui'] as const satisfies UiDomainNavigation
export const uiPagesNavigation = ['/ui/radio-group'] as const satisfies UiPagesNavigation

export const uiNavigation = [...uiDomainsNavigation, ...uiPagesNavigation] as const

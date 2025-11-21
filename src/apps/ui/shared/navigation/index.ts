// src/apps/ui/shared/navigation/index.ts

import type {
  UiDomainNavigation,
  UiSegmentNavigation,
  UiComponentsNavigation,
} from '@apps/ui/shared/types'

export const uiDomainsNavigation = ['/ui'] as const satisfies UiDomainNavigation[]

const uiSegmentNavigation = [
  '/ui/components',
  '/ui/blocks',
] as const satisfies UiSegmentNavigation[]

const uiComponentsNavigation = [
  '/ui/components/radio-group',
] as const satisfies UiComponentsNavigation[]

export const uiNavigation = [
  ...uiDomainsNavigation,
  ...uiSegmentNavigation,
  ...uiComponentsNavigation,
] as const

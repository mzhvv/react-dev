// src/apps/ui/shared/navigation/index.ts

import type {
  DomainNavigation,
  SegmentNavigation,
  ComponentsNavigation,
} from '@apps/ui/shared/types/prnc'

export const domainNavigation = ['/ui'] as const satisfies DomainNavigation[]

const segmentNavigation = ['/ui/components', '/ui/blocks'] as const satisfies SegmentNavigation[]

const componentsNavigation = [
  '/ui/components/radio-group',
] as const satisfies ComponentsNavigation[]

export const navigation = [
  ...domainNavigation,
  ...segmentNavigation,
  ...componentsNavigation,
] as const

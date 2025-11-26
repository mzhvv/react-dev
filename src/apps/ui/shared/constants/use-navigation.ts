// src/apps/ui/shared/constants/use-navigation.ts

import type {
  Constants,
  ConstantsDomainNavigationLink,
  ConstantsSegmentNavigationLinks,
  ConstantsComponentsNavigationLinks,
  ConstantsNavigationLink,
} from '@apps/ui/shared/types/prnc'

export function useConstants() {
  const DOMAIN_NAVIGATION_LINKS = {
    '/ui': {
      relativePath: 'ui',
      absolutePath: '/ui',
      title: 'ui',
    },
  } as const satisfies ConstantsDomainNavigationLink

  const SEGMENT_NAVIGATION_LINKS = {
    '/ui/components': {
      relativePath: 'components',
      absolutePath: '/ui/components',
      title: 'components',
    },
    '/ui/blocks': {
      relativePath: 'blocks',
      absolutePath: '/ui/blocks',
      title: 'blocks',
    },
  } as const satisfies ConstantsSegmentNavigationLinks

  const COMPONENTS_NAVIGATION_LINKS = {
    '/ui/components/radio-group': {
      relativePath: 'radio-group',
      absolutePath: '/ui/components/radio-group',
      title: 'radio-group',
    },
  } as const satisfies ConstantsComponentsNavigationLinks

  const NAVIGATION_LINKS = {
    ...DOMAIN_NAVIGATION_LINKS,
    ...SEGMENT_NAVIGATION_LINKS,
    ...COMPONENTS_NAVIGATION_LINKS,
  } as const satisfies ConstantsNavigationLink

  return {
    NAVIGATION_LINKS,

    DOMAIN_NAVIGATION_LINKS,
    SEGMENT_NAVIGATION_LINKS,
    COMPONENTS_NAVIGATION_LINKS,
  } as const satisfies Constants
}

// src/apps/ui/shared/constants/use-navigation.ts

import type {
  UiDomainNavigationLinks,
  UiSegmentNavigationLinks,
  UiComponentsNavigationLinks,
} from '@apps/ui/shared/types'

// import { useTranslation } from 'react-i18next'

export function useUiNavigationConstants() {
  // const { t } = useTranslation('common')

  const UI_DOMAIN_NAVIGATION_LINKS = {
    '/ui': {
      relativePath: 'ui',
      absolutePath: '/ui',
      title: 'ui', // t('') || 'ui',
    },
  } as const satisfies UiDomainNavigationLinks

  const UI_SEGMENT_NAVIGATION_LINKS = {
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
  } as const satisfies UiSegmentNavigationLinks

  const UI_COMPONENTS_NAVIGATION_LINKS = {
    '/ui/components/radio-group': {
      relativePath: 'radio-group',
      absolutePath: '/ui/components/radio-group',
      title: 'radio-group', // t('') || 'radio-group',
    },
  } as const satisfies UiComponentsNavigationLinks

  const UI_NAVIGATION_LINKS = {
    ...UI_DOMAIN_NAVIGATION_LINKS,
    ...UI_SEGMENT_NAVIGATION_LINKS,
    ...UI_COMPONENTS_NAVIGATION_LINKS,
  } as const

  return {
    UI_DOMAIN_NAVIGATION_LINKS,
    UI_SEGMENT_NAVIGATION_LINKS,
    UI_COMPONENTS_NAVIGATION_LINKS,

    UI_NAVIGATION_LINKS,
  }
}

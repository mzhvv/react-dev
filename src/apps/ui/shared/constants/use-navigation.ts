// src/apps/ui/shared/constants/use-navigation.ts

// import { useTranslation } from 'react-i18next'

import type { DomainPathNavigation, PagePathNavigation } from '@global/navigation'
import type { GlobalNavigationConstants } from '@global/constants'
import type { DomainRoutePath, PageRoutePath } from '@apps/ui/shared/types'

type UiDomainNavigationLinks = Record<
  DomainPathNavigation<DomainRoutePath>,
  GlobalNavigationConstants<DomainRoutePath, DomainPathNavigation<DomainRoutePath>>
>
type UiPagesNavigationLinks = Record<
  PagePathNavigation<DomainRoutePath, PageRoutePath>,
  GlobalNavigationConstants<PageRoutePath, PagePathNavigation<DomainRoutePath, PageRoutePath>>
>

export function useUiNavigationConstants() {
  // const { t } = useTranslation('common')

  const UI_DOMAIN_NAVIGATION_LINKS = {
    '/ui': {
      relativePath: 'ui',
      absolutePath: '/ui',
      title: 'ui', // t('') || 'ui',
    },
  } as const satisfies UiDomainNavigationLinks

  const UI_PAGES_NAVIGATION_LINKS = {
    '/ui/radio-group': {
      relativePath: 'radio-group',
      absolutePath: '/ui/radio-group',
      title: 'radio-group', // t('') || 'radio-group',
    },
  } as const satisfies UiPagesNavigationLinks

  const UI_NAVIGATION_LINKS = {
    ...UI_DOMAIN_NAVIGATION_LINKS,
    ...UI_PAGES_NAVIGATION_LINKS,
  } as const

  return {
    UI_DOMAIN_NAVIGATION_LINKS,
    UI_PAGES_NAVIGATION_LINKS,

    UI_NAVIGATION_LINKS,
  }
}

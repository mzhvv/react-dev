// src/react-dev/shared/constants/use-navigation.ts

// import { useTranslation } from 'react-i18next'
import { HeartIcon, HandHeartIcon, HeartHandshakeIcon } from 'lucide-react'

import type { DomainPathNavigation } from '@react-dev/__aggregator__/navigation'
import type { GlobalNavigationConstants } from '@react-dev/__aggregator__/constants'
import type { RootRoutePath, DomainRoutePath } from '@react-dev/shared/types'

type ReactDevDomainNavigationLinks = Record<
  RootRoutePath | DomainPathNavigation<DomainRoutePath>,
  GlobalNavigationConstants<
    RootRoutePath | DomainRoutePath,
    RootRoutePath | DomainPathNavigation<DomainRoutePath>
  >
>

export function useReactdevNavigationConstants() {
  // const { t } = useTranslation('common')

  const REACTDEV_DOMAIN_NAVIGATION_LINKS = {
    '/': {
      relativePath: '/',
      absolutePath: '/',
      title: 'Главная', // t('') || 'Главная',
      icon: HeartIcon, // HouseHeartIcon
    },
    '/about': {
      relativePath: 'about',
      absolutePath: '/about',
      title: 'О приложении', // t('') || 'О приложении',
      icon: HandHeartIcon, // HandHelpingIcon
    },
    '/collaboration': {
      relativePath: 'collaboration',
      absolutePath: '/collaboration',
      title: 'Сотрудничество', // t('') || 'Сотрудничество',
      icon: HeartHandshakeIcon, // HandshakeIcon
    },

    '/ui-component-variants': {
      relativePath: 'ui-component-variants',
      absolutePath: '/ui-component-variants',
      title: 'ui-component-variants',
    },
  } as const satisfies ReactDevDomainNavigationLinks

  return {
    REACTDEV_DOMAIN_NAVIGATION_LINKS,
  }
}

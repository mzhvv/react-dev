import { HeartIcon, HandHeartIcon, HeartHandshakeIcon } from 'lucide-react'

import type { NavigationParentPath } from '@global/navigation'
import type { GlobalNavigationConstants } from '@global/constants'

import type { ParentRoutePath } from '../types/router-and-navigation'

// export const reactdevNavigationConstants = {
//   reactdevParentLink: {
//     '/': {
//       title: 'Главная',
//       icon: HeartIcon, // HouseHeartIcon
//     },
//     '/about': {
//       title: 'О приложении',
//       icon: HandHeartIcon, // HandHelpingIcon
//     },
//     '/collaboration': {
//       title: 'Сотрудничество',
//       icon: HeartHandshakeIcon, // HandshakeIcon
//     },

//     '/ui-component-variants': { title: 'ui-component-variants' },
//   } as const satisfies Record<
//     '/' | NavigationParentPath<ParentRoutePath>,
//     GlobalNavigationConstants
//   >,

//   reactdevChildrensLink: {} as const,
// } as const

// i18n

import { useTranslation } from 'react-i18next'

export function useReactdevNavigationConstants() {
  const { t } = useTranslation('common')

  const reactdevParentLink = {
    '/': {
      title: t('') || 'Главная',
      icon: HeartIcon, // HouseHeartIcon
    },
    '/about': {
      title: t('') || 'О приложении',
      icon: HandHeartIcon, // HandHelpingIcon
    },
    '/collaboration': {
      title: t('') || 'Сотрудничество',
      icon: HeartHandshakeIcon, // HandshakeIcon
    },

    '/ui-component-variants': { title: 'ui-component-variants' },
  } as const satisfies Record<
    '/' | NavigationParentPath<ParentRoutePath>,
    GlobalNavigationConstants
  >

  const reactdevChildrensLink = {} as const

  return {
    reactdevParentLink,
    reactdevChildrensLink,
  }
}

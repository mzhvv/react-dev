// src/react-dev/shared/libs/navigation/index.tsx

import {
  HeartIcon,
  HandHeartIcon,
  HeartHandshakeIcon,
  // HouseHeartIcon,
  // HandHelpingIcon,
  // HandshakeIcon,
} from 'lucide-react'

import type { NavigationLink, NavigationSectionKey } from '@global/libs/navigation/types'

import type { ChildrenRoutePaths } from '@react-dev/shared/types/router-and-navigation'

export const navigationReactDev = {
  application: [
    {
      path: '/',
      title: 'Главная',
      icon: HeartIcon, // HouseHeartIcon
    },
    {
      path: '/about',
      title: 'О приложении',
      icon: HandHeartIcon, // HandHelpingIcon
    },
  ],
  author: [
    {
      path: '/collaboration',
      title: 'Сотрудничество',
      icon: HeartHandshakeIcon, // HandshakeIcon
    },
  ],
  projects: [],
  development: [{ path: '/ui-component-variants', title: 'ui-component-variants' }],
} as const satisfies Record<NavigationSectionKey, NavigationLink<ChildrenRoutePaths | ''>[]>

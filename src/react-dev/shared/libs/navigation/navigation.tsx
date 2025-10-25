// src/react-dev/shared/navigation/navigation.tsx

import {
  HeartIcon,
  HandHeartIcon,
  HeartHandshakeIcon,
  // HouseHeartIcon,
  // HandHelpingIcon,
  // HandshakeIcon,
} from 'lucide-react'

import type { NavigationLink, NavigationSectionKey } from '@global/libs/navigation/types'

import type { Path } from './types'

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
} as const satisfies Record<NavigationSectionKey, NavigationLink<Path | ''>[]>

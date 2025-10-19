// src/react-dev/shared/navigation/navigation.tsx

import { HandshakeIcon } from 'lucide-react'

import type { NavigationLink, NavigationSectionKey } from '@global/libs/navigation/types'

import type { Path } from './types'

export const navigationReactDev = {
  application: [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
  ],
  author: [{ path: '/collaboration', title: 'Collaboration', icon: HandshakeIcon }],
  projects: [],
  development: [],
  secondary: [{ path: '/ui-variant', title: 'ui-variant' }],
} as const satisfies Record<NavigationSectionKey, NavigationLink<Path | ''>[]>

import { HandshakeIcon } from 'lucide-react'

import type { NavigationLink, NavigationSectionKey } from '@global/navigation/types'
import type { Path } from '@react-dev/shared/types'

export const navigationReactDev = {
  application: [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
  ],
  author: [{ path: '/collaboration', title: 'Collaboration', icon: HandshakeIcon }],
  projects: [],
  development: [{ path: '/ui-variant', title: 'ui-variant' }],
  secondary: [],
} as const satisfies Record<NavigationSectionKey, NavigationLink<Path | ''>[]>

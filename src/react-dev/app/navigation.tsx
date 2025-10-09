// src/react-dev/app/navigation.tsx

import { HandshakeIcon } from 'lucide-react'

import type { NavigationLinkWithSections } from '@global/navigation'
import type { Path } from '@react-dev/shared/types'

export const navigationReactDev = {
  application: [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
  ],
  author: [{ path: '/collaboration', title: 'Collaboration', icon: HandshakeIcon }],
} as const satisfies NavigationLinkWithSections<Path | ''>

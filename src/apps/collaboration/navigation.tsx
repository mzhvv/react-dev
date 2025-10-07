import { HandshakeIcon } from 'lucide-react'

import type { NavigationObject } from '@navigation'

import type { Path } from './types'

export const navigationCollaboration = [
  { path: '/collaboration', title: 'Collaboration', icon: HandshakeIcon },
] as const satisfies NavigationObject<Path>[]

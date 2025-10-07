import { HandshakeIcon } from 'lucide-react'

import type { NavigationLink } from '@navigation'

import type { Path } from './types'

export const navigationCollaboration = [
  { path: '/collaboration', title: 'Collaboration', icon: HandshakeIcon },
] as const satisfies NavigationLink<Path>[]

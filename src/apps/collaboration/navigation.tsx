import type { NavigationObject } from '@navigation'

import type { Path } from './types'
import { HandshakeIcon } from 'lucide-react'

export const navigationCollaboration = [
  { path: '/collaboration', title: 'Collaboration', icon: HandshakeIcon },
] as const satisfies NavigationObject<`/${Path}`>[]

// src/react-dev/shared/navigation/navigation.tsx

import { HandshakeIcon, HomeIcon } from 'lucide-react'

import type { NavigationLink } from '@navigation'

import type { Path } from '@react-dev/shared/types'

export const navigationReactDev = [
  { path: '/', title: 'Home', icon: HomeIcon },
  { path: '/about', title: 'About' },
  { path: '/collaboration', title: 'Collaboration', icon: HandshakeIcon },
] as const satisfies NavigationLink<Path | ''>[] // Тип ""/"" не может быть назначен для типа ""//" | "/about" | "/collaboration"".ts(2322) - решение: <... | ''>[]

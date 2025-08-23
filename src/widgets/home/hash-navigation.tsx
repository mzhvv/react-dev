// src/widgets/main/hash-navigation.tsx

import type { DefaultHashLink, MainHashMavigation, MakeSafeHashLinkHref } from '@/shared/types'
import { HashLink } from '@/shared/ui'

// model/types

type SafeHashLinkHref = MakeSafeHashLinkHref<MainHashMavigation>
type SafeHashLink = DefaultHashLink<SafeHashLinkHref>

// model/config

const hashLinks: SafeHashLink[] = [
  // { href: '#root', label: 'root' },
  { href: '#application-content', label: 'application content' },
  { href: '#about-application', label: 'about application' },
  { href: '#about-me', label: 'about me' },
] as const

// model/ui

export const HomeHashNavigation: React.FC = () => {
  return (
    <ul className='flex gap-1.5'>
      {hashLinks.map(hashLink => (
        <li key={hashLink.href}>
          <HashLink // <SafeHashLink>
            link={hashLink}
            variants={{ variant: 'default', size: 'default' }}
          />
        </li>
      ))}
    </ul>
  )
}

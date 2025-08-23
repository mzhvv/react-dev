// src/widgets/shared/author-links.tsx

import type {
  DefaultExternalLink,
  DefaultHashLink,
  MainHashMavigation,
  MakeSafeHashLinkHref,
} from '@/shared/types'
import { ExternalLink, HashLink } from '@/shared/ui'

// model/types

type RestrictHashLinkHref<T extends MainHashMavigation> = T

type SafeHashLinkHref = MakeSafeHashLinkHref<RestrictHashLinkHref<'about-me'>>
type SafeHashLink = DefaultHashLink<SafeHashLinkHref>

// model/config

const externalLink: DefaultExternalLink = {
  href: 'https://github.com/mzhvv/react-dev',
  label: 'repository',
} as const
const hashLink: SafeHashLink = { href: '#about-me', label: 'mzhvv' } as const

// model/ui

export const AuthorLinks: React.FC = () => {
  return (
    <div className='inline-flex gap-1.5'>
      <ExternalLink link={externalLink} />
      by
      <HashLink // <SafeHashLink>
        link={hashLink}
      />
    </div>
  )
}

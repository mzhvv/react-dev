// src/widgets/shared/author-social-links.tsx

import type { DefaultExternalLink } from '@/shared/types'
import { ExternalLink } from '@/shared/ui'

// model/confog

const externalLink: DefaultExternalLink[] = [
  { href: 'https://github.com/mzhvv', label: 'Github' },
] as const

// model/ui

export const AuthorSocialLinks: React.FC = () => {
  return (
    <ul>
      {externalLink.map(link => (
        <li key={link.href}>
          <ExternalLink // <DefaultExternalLink>
            link={link}
          />
        </li>
      ))}
    </ul>
  )
}

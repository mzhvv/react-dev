// src/widgets/shared/navigation/dev-domain.tsx

import { DEV_DOMAIN_API, LINK_MAP_BY_KEY, useLinkMap } from '@/shared/constants'
import { Button } from '@/shared/ui'
import { Link } from 'react-router'

type DevDomainNavigationProps = { header?: boolean }
export const DevDomainNavigation: React.FC<DevDomainNavigationProps> = ({ header = false }) => {
  const linkMap = useLinkMap()

  return (
    <nav>
      {header && (
        <h3>
          <Link to={LINK_MAP_BY_KEY[DEV_DOMAIN_API.HEADER_KEY].absolutePath}>
            {DEV_DOMAIN_API.HEADER_KEY}
          </Link>
        </h3>
      )}
      <ul className='flex items-center gap-1.5'>
        {DEV_DOMAIN_API.NAVIGATION_KEYS.map(key => {
          const link = linkMap[key]
          return (
            <li key={key}>
              <Button asChild variant='default' size='lg'>
                <Link to={link.absolutePath}>{link.label}</Link>
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

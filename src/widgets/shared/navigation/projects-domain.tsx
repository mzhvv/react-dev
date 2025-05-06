// src/widgets/shared/navigation/projects-domain.tsx

import { LINK_MAP_BY_KEY, PROJECTS_DOMAIN_API, useLinkMap } from '@/shared/constants'
import { Button } from '@/shared/ui'
import { Link } from 'react-router'

type ProjectsDomainNavigationProps = { header?: boolean }
export const ProjectsDomainNavigation: React.FC<ProjectsDomainNavigationProps> = ({ header }) => {
  const linkMap = useLinkMap()

  return (
    <nav>
      {header && (
        <h3>
          <Link to={LINK_MAP_BY_KEY[PROJECTS_DOMAIN_API.HEADER_KEY].absolutePath}>
            {PROJECTS_DOMAIN_API.HEADER_KEY}
          </Link>
        </h3>
      )}
      <ul className='flex items-center gap-1.5'>
        {PROJECTS_DOMAIN_API.NAVIGATION_KEYS.map(key => {
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

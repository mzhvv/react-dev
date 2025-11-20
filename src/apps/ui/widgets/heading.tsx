// src/apps/ui/widgets/heading.tsx

import { Link } from 'react-router'
import { useUiNavigationConstants } from '../shared/constants/use-navigation'
import { uiDomainsNavigation } from '../shared/navigation'

export const ReactdevHeading = () => {
  const { UI_DOMAIN_NAVIGATION_LINKS } = useUiNavigationConstants()

  return (
    <h1>
      {uiDomainsNavigation.map(pathKey => {
        const { absolutePath, title } = UI_DOMAIN_NAVIGATION_LINKS[pathKey]
        return (
          <Link key={pathKey} to={absolutePath}>
            {title}
          </Link>
        )
      })}
    </h1>
  )
}

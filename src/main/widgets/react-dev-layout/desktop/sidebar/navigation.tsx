// src/react-dev/widgets/react-dev-layout/desktop/sidebar/navigation.tsx

import { Link } from 'react-router'
import { Button } from '@ui/components/button'
import { globalNavigation } from '@react-dev/aggregator/navigation'

export const DesktopSidebarNavigation = () =>
  globalNavigation.domainSections.map(navigationSection => (
    <div key={navigationSection.title}>
      <div>{navigationSection.title}</div>
      <div>
        {navigationSection.links.map(linkKey => (
          <Button key={linkKey} asChild>
            <Link to={linkKey}>{linkKey}</Link>
          </Button>
        ))}
      </div>
    </div>
  ))

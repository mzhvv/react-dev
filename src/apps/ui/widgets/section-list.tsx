// src/apps/ui/widgets/section-list.tsx

import { Link } from 'react-router'

import {
  Section,
  SectionContent,
  // SectionHeader
} from '@ui/layout-system'

import { useUiNavigationConstants } from '../shared/constants/use-navigation'
import { uiPagesNavigation } from '../shared/navigation'

export const UiSectionList = () => {
  const { UI_PAGES_NAVIGATION_LINKS } = useUiNavigationConstants()
  return (
    <Section>
      {/* <SectionHeader>навигация</SectionHeader> */}
      <SectionContent>
        <nav>
          {uiPagesNavigation.map(pathKey => {
            const { absolutePath, title } = UI_PAGES_NAVIGATION_LINKS[pathKey]
            return (
              <Link key={pathKey} to={absolutePath}>
                {title}
              </Link>
            )
          })}
        </nav>
      </SectionContent>
    </Section>
  )
}

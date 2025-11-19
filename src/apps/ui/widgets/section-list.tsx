import { Link } from 'react-router'

import {
  Section,
  SectionContent,
  // SectionHeader
} from '@ui/layout-system'

import { useConstantsUiNavigation } from '../shared/constants/navigation'
import { navigationUIPages } from '../shared/navigation'

export const UiSectionList = () => {
  const { CONSTANTS_UI_LINK_PAGES } = useConstantsUiNavigation()
  return (
    <Section>
      {/* <SectionHeader>навигация</SectionHeader> */}
      <SectionContent>
        <nav>
          {navigationUIPages.map(pathKey => {
            const { absolutePath, title } = CONSTANTS_UI_LINK_PAGES[pathKey]
            return <Link to={absolutePath}>{title}</Link>
          })}
        </nav>
      </SectionContent>
    </Section>
  )
}

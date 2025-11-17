import { Section, SectionContent, SectionHeader } from '@ui/layout-system'
import { Link } from 'react-router'

export const UiListPage = () => {
  return (
    <Section>
      <SectionHeader>навигация</SectionHeader>
      <SectionContent>
        <nav>
          <Link to={'/ui/radio-group'}>radio-group</Link>
        </nav>
      </SectionContent>
    </Section>
  )
}

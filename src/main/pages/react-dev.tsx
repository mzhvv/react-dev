// src/react-dev/pages/react-dev.tsx

import { Main, Header, Section, SectionHeader, SectionContent } from '@ui/layout-system'

import { Navigation } from '@react-dev/widgets/react-dev/navigation'

export const ReactDevPage = () => {
  return (
    <Main>
      <Header>
        <h1>react-dev</h1>
      </Header>

      <Section>
        <SectionHeader className='sr-only'>
          <h2>Навигация</h2>
        </SectionHeader>

        <SectionContent>
          <nav className='space-y-4'>
            <Navigation />
          </nav>
        </SectionContent>
      </Section>
    </Main>
  )
}

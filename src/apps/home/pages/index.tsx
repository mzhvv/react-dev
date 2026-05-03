// src/apps/home/pages/index.tsx

import { Header, Main, Section, SectionContent } from '@packages/ui/mzhvv/layout-system'

export const HomePage = () => {
  return (
    <div data-app='home'>
      <Header>
        <h1>react-dev</h1>
      </Header>
      <Main>
        <Section>
          <SectionContent>.</SectionContent>
        </Section>
      </Main>
    </div>
  )
}

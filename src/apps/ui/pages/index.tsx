// src/apps/ui/pages/index.tsx

import { Header, Main, Section, SectionContent } from '@packages/ui/layout-system'

export const UiPage = () => {
  return (
    <div data-app='ui'>
      <Header>
        <h1>ui</h1>
      </Header>
      <Main>
        <Section>
          <SectionContent>.</SectionContent>
        </Section>
      </Main>
    </div>
  )
}

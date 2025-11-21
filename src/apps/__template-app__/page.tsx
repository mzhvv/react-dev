// src/apps/__template-app__/page.tsx

import { Main, Header, Section, SectionContent } from '@ui/layout-system'

export const TemplateApp = () => {
  return (
    <Main>
      <Header>
        <h1>template-app</h1>
      </Header>

      <Section>
        <SectionContent>
          <div>✅ App template-app created successfully!</div>
        </SectionContent>
      </Section>
    </Main>
  )
}

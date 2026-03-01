// src/main/pages/react-dev.tsx

import { Main, Header, Section, SectionHeader, SectionContent } from '@ui/layout-system'

import { Navigation } from '@main/widgets/main/navigation'

export const ReactDevPage = () => {
  return (
    <Main>
      <Header>
        <h1 className='sr-only'>react-dev | @mzhvv/react-framework@alpha</h1>
      </Header>

      <Section>
        <SectionHeader>react-dev</SectionHeader>
        <SectionContent>
          <p>
            Изначально react-dev — портфолио. «Монолит» — хаотичная структура папок, полное
            отсутствие архитектуры и все вытекающие последствия. Как итог — абсолютная
            неподдерживаемость.
          </p>
          <p>
            И был сформулирован @mzhvv/react-framework — некое архитектурное решение, ни на что не
            претендующее, для моих целей.
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader>@mzhvv/react-framework</SectionHeader>
        <SectionContent>
          <p>react-framework - это свод правил, архетектурных решений</p>
          <p>...</p>
        </SectionContent>
      </Section>

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

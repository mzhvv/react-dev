import { Navigation } from '@react-dev/widgets/home'
import { Main, Header, Section, SectionHeader, SectionContent } from '@ui/layout-system'

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

// <Section>
//   <SectionContent>
//     <p className='inline-flex h-8 items-center gap-1.5'>
//       Разработано
//       <a
//         href='https://github.com/mzhvv'
//         target='_blank'
//         className='decoration-border hover:decoration-foreground underline decoration-1 underline-offset-3'
//       >
//         mzhvv
//       </a>
//       . Исходный код доступен на
//       <a
//         href='https://github.com/mzhvv/react-dev'
//         target='_blank'
//         className='decoration-border hover:decoration-foreground underline decoration-1 underline-offset-3'
//       >
//         GitHub
//       </a>
//     </p>
//   </SectionContent>
// </Section>

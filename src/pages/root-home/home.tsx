// src/pages/home/home.tsx

import { HomeHashNavigation, HomeSection } from '@/widgets/home'
import { ApplicationContenNavigation, HeaderPathname } from '@/widgets/shared'
import { Container, Section } from '@/shared/ui'

export const HomePage: React.FC = () => {
  return (
    <Container.Component asElement='main' className=''>
      <HeaderPathname />

      <HomeSection
        dataId='intro'
        className='' // h-[calc(100svh-180px-40px-20px)]
      >
        <Section.Slot>
          <Section.Content className='flex flex-col items-center justify-start gap-5'>
            <p>Software Engineer — JavaScript, TypeScript & Node.js Developer</p>
          </Section.Content>
        </Section.Slot>
      </HomeSection>

      <Container.Component
        asElement='nav'
        className='bg-background/75 sticky top-15 backdrop-blur-sm'
      >
        <Container.Slot className='flex h-15 items-center justify-center'>
          <HomeHashNavigation />
        </Container.Slot>
      </Container.Component>

      <HomeSection
        id='application-content'
        className='scroll-mt-[calc(120px+20px)]' // h-[calc(100svh-120px-20px)]
      >
        <Section.Slot>
          <Section.Header>
            <h2>application conten</h2>
          </Section.Header>
          <Section.Content className='space-y-3 *:space-y-3'>
            <ApplicationContenNavigation />
          </Section.Content>
        </Section.Slot>
      </HomeSection>

      <HomeSection
        dataId='about-me'
        className='' // min-h-[calc(100svh-180px-40px-20px)]
      >
        <Section.Slot>
          <Section.Header>
            <h2>about me</h2>
          </Section.Header>
          <Section.Content>
            <p>...</p>
          </Section.Content>
        </Section.Slot>
      </HomeSection>
    </Container.Component>
  )
}

import { HeaderPathname, ProjectsDomainNavigation } from '@/widgets'

import { Container, Section } from '@/shared/ui'

export const ProjectsPage: React.FC = () => {
  return (
    <Container.Component asElement='main'>
      <HeaderPathname />

      <Section.Component>
        <Section.Slot>
          <ProjectsDomainNavigation />
        </Section.Slot>
      </Section.Component>
    </Container.Component>
  )
}

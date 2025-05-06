import { DevDomainNavigation, HeaderPathname } from '@/widgets'

import { Container, Section } from '@/shared/ui'

export const DevPage: React.FC = () => {
  return (
    <Container.Component asElement='main'>
      <HeaderPathname />

      <Section.Component>
        <Section.Slot>
          <Section.Content>
            <DevDomainNavigation />
          </Section.Content>
        </Section.Slot>
      </Section.Component>
    </Container.Component>
  )
}

import { Container, Section } from '@/shared/ui'

export const ApplicationMapPage: React.FC = () => {
  return (
    <Container.Component asElement='main'>
      <Section.Component>
        <Section.Slot>
          <Section.Header>
            <h1>Application Map</h1>
          </Section.Header>
        </Section.Slot>
      </Section.Component>
    </Container.Component>
  )
}

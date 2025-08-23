import { DevDomainNavigation } from './dev-domain'
import { ProjectsDomainNavigation } from './projects-domain'

export const ApplicationContenNavigation: React.FC = () => {
  return (
    <>
      <ProjectsDomainNavigation header />
      <DevDomainNavigation header />
    </>
  )
}

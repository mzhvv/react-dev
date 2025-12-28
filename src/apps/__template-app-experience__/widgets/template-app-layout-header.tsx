// src/apps/__template-app-experience__/widgets/template-app-layout-header.tsx

import { Link } from 'react-router'

import { Header } from '@ui/layout-system'

import { domainNavigation } from '../shared/navigation'
import { constantsAPI } from '../shared/constants'

export const TemplateAppLayoutHeader = () => {
  return (
    <Header>
      <div>
        <h1>
          {domainNavigation.map(keyPath => {
            const { domainLinks } = constantsAPI.navigation()
            const linkEntity = domainLinks[keyPath]
            return (
              <Link key={keyPath} to={linkEntity.absolutePath}>
                {linkEntity.title}
              </Link>
            )
          })}
        </h1>
      </div>
    </Header>
  )
}

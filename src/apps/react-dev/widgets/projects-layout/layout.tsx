import { Link, Outlet } from 'react-router'

import type { NavigationObject } from '@navigation'
import { navigationAccumulate as accumulateNavigationProjects } from '@navigation'

const NAVIGATION_ARRAY = [
  {
    key: 'main',
    title: 'main',
    links: accumulateNavigationProjects.main,
  },
  {
    key: 'secondary',
    title: 'secondary',
    links: accumulateNavigationProjects.secondary,
  },
] as const satisfies {
  key: keyof typeof accumulateNavigationProjects
  title: string
  links: NavigationObject[]
}[]

export const ProjectsLayout = () => {
  return (
    <>
      <div>
        {NAVIGATION_ARRAY.map(object => (
          <div key={object.key}>
            <h3>{object.title}</h3>
            <ul>
              {object.links.map(link => (
                <li key={link.path}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  )
}

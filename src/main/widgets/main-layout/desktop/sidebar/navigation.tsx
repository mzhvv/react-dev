// src/main/widgets/main-layout/desktop/sidebar/navigation.tsx

import { Link } from 'react-router'
import { Button } from '@ui/components/button'
import { globalNavigation } from '@accumulator/navigation/global'
import { useGlobalNavigation } from '@accumulator/navigation'

const AppsDomainOnlyNavigation = () => {
  return globalNavigation.apps.domainOnly.map(({ section, links }) => (
    <div key={section.id} className='mt-2'>
      {(() => {
        const { section: section2 } = useGlobalNavigation()
        const { title } = section2[section.constKey || section.id]
        return (
          <div className='flex h-8 items-center justify-start px-2 text-xs opacity-75'>{title}</div>
        )
      })()}
      <div>
        {links.map(link => (
          <Button key={link.absolutePath} variant='ghost' size='sm' asChild>
            <Link to={link.absolutePath} className='w-full justify-start px-2!'>
              {link.constKey}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  ))
}

export const DesktopSidebarNavigation = () => {
  return (
    <div>
      <AppsDomainOnlyNavigation />
    </div>
  )
}

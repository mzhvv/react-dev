// src/main/widgets/main-layout/desktop/sidebar/navigation.tsx

import { Link } from 'react-router'
import { Button } from '@mzhvv/ui/components/button'

import { navigation } from '@aggregator'

// !todo - константы через агрегатор!
import { APPS_CONSTANTS } from '@accumulator'

const AppsDomainOnlyNavigation = () => {
  return navigation.apps.domain.map(({ section, links }) => (
    <div key={section.id} className='mt-2'>
      {(() => {
        const { section: section2 } = APPS_CONSTANTS.useNavigation()
        const { title } = section2[section.constKey || section.id]
        return (
          <div className='flex h-8 items-center justify-start px-2 text-xs opacity-75'>{title}</div>
        )
      })()}
      <div>
        {(() => {
          return links.map(link => {
            // const { domainLinksMAP } = useGlobalNavigation()
            // const { title } = domainLinksMAP[link.constKey]
            return (
              <Button key={link.absolutePath} variant='ghost' size='sm' asChild>
                <Link to={link.absolutePath} className='w-full justify-start px-2!'>
                  {/* {title || link.constKey} */}
                  {link.constKey}
                </Link>
              </Button>
            )
          })
        })()}
        {}
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

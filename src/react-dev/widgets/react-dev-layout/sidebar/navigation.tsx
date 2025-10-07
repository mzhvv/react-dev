// import { GripIcon } from 'lucide-react'
// import { Button } from '@ui/components'

import { NAVIGATION_SECTIONS } from '@navigation'

import { SidebarReactDevNavigationLists } from './navigation-lists'

export const Navigation: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav className={className}>
      <div className='p-2'>
        {/* <div className='flex gap-2 p-2'>
          <Button
            variant='gradient-secondary-white'
            size='icon'
            className='text-base font-bold tracking-tighter shadow'
          >
            <GripIcon className='size-5' />
          </Button>
          <div className='flex flex-col'>
            <p className='text-sm'>Apps</p>
            <p className='text-sidebar-foreground/70 text-xs leading-5 tracking-[-0.018em]'>
              Workspace for React development
            </p>
          </div>
        </div> */}

        <SidebarReactDevNavigationLists navigationArray={NAVIGATION_SECTIONS} />
      </div>
      <div className='bg-border/50 my-2 w-px rounded-full' />
    </nav>
  )
}

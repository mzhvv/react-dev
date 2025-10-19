import { useState } from 'react'
import { Link } from 'react-router'
import { GripIcon, User2Icon } from 'lucide-react'

import { Button } from '@ui/components/button'

import { Settings } from './settings'
import { Navigation } from './navigation'

export const SidebarDesktop = () => {
  const [isNavigationVisible, setIsNavigationVisible] = useState(true)
  function toggleNavigation() {
    setIsNavigationVisible(prev => !prev)
  }

  return (
    <header data-nav={isNavigationVisible} className='group sticky top-0 flex h-svh'>
      {/* // */}

      <div className='flex flex-none flex-col justify-between p-2'>
        <div className='p-2'>
          <div className='flex flex-col gap-2'>
            <Button asChild size='icon' className='shadow'>
              <Link to='/' className='text-base font-bold tracking-tighter'>
                RD
              </Link>
            </Button>

            <Button
              onClick={toggleNavigation}
              title={`${isNavigationVisible ? 'Close' : 'Open'} navigation`}
              aria-label={`${isNavigationVisible ? 'Close' : 'Opne'} navigation`}
              variant='ghost'
              size='icon'
            >
              <GripIcon />
            </Button>
          </div>
        </div>

        <div className='flex flex-1 flex-col justify-end p-2'>
          <div className='flex flex-col gap-2'>
            <Settings />

            <Button variant='secondary' size='icon' className='shadow'>
              <User2Icon />
            </Button>
          </div>
        </div>

        {/* <div className='p-2'>
          <div>
            <Button
              onClick={toggleNavigation}
              title={`${isNavigationVisible ? 'Close' : 'Open'} navigation`}
              aria-label={`${isNavigationVisible ? 'Close' : 'Opne'} navigation`}
              variant='ghost'
              size='icon'
            >
              <GripIcon />
            </Button>
          </div>
        </div> */}
      </div>

      <div
        data-decorative='true'
        className='bg-border/50 my-4 w-px flex-none rounded-full transition-[opacity] delay-100 duration-200 group-data-[nav=false]:w-0 group-data-[nav=false]:opacity-0'
      />

      <nav className='h-svh w-0 overflow-hidden transition-[width,opacity] duration-300 ease-in-out group-data-[nav=false]:opacity-0 group-data-[nav=true]:w-[230px]'>
        <Navigation />
      </nav>

      <div data-decorative='true' className='bg-border/50 my-4 w-px flex-none rounded-full' />
    </header>
  )
}

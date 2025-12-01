// src/react-dev/widgets/react-dev-layout/desktop/sidebar/index.tsx

import { useState } from 'react'
import { Link } from 'react-router'
import { GripIcon, User2Icon } from 'lucide-react'

import { cn } from '@ui/lib'
import { Button } from '@ui/components/button'

import { SettingsModal } from '../../settings-modal'

import { DesktopSidebarNavigation } from './navigation'

export const DesktopSidebar = () => {
  const [isNavigationVisible, setIsNavigationVisible] = useState(true)
  function toggleNavigation() {
    setIsNavigationVisible(prev => !prev)
  }

  return (
    <header
      data-nav={isNavigationVisible ? 'open' : 'close'}
      className='group sticky top-0 flex h-svh *:shrink-0'
    >
      <FirstColumn {...{ isNavigationVisible, toggleNavigation }} />
      <Separator />
      <SecondColumn />
      {/* Сепаратор внутри SecondColumn */}
    </header>
  )
}

const FirstColumn: React.FC<{ isNavigationVisible: boolean; toggleNavigation: () => void }> = ({
  isNavigationVisible,
  toggleNavigation,
}) => {
  return (
    <div className='flex w-17 flex-col justify-between p-2'>
      {/* - */}

      <div className='p-2'>
        <div className='flex flex-col gap-2'>
          <Button asChild size='icon' className='shadow'>
            <Link to='/' className='text-base font-bold tracking-tighter'>
              RD
            </Link>
          </Button>
        </div>
      </div>

      <div className='flex grow flex-col'>
        <div className='space-y-px p-2'>
          <Button
            onClick={toggleNavigation}
            title={`${isNavigationVisible ? 'Скрыть' : 'Показать'} навигацию`}
            aria-label={`${isNavigationVisible ? 'Скрыть' : 'Показать'} навигацию`}
            variant='ghost'
            size='icon'
          >
            <GripIcon />
          </Button>

          {/* <NavigationModal /> */}
        </div>
      </div>

      <div>
        <div className='px-2'>
          <SettingsModal />
        </div>
        <div className='p-2'>
          <Button variant='secondary' size='icon' className='shadow'>
            <User2Icon />
          </Button>
        </div>
      </div>
    </div>
  )
}

const SecondColumn = () => {
  return (
    <div
      className={cn(
        'flex h-svh grow',
        'w-[231px] opacity-100',
        'overflow-hidden transition-[width,opacity] duration-150 ease-linear group-data-[nav=close]:w-0 group-data-[nav=close]:opacity-0'
      )}
    >
      <div className='grow p-2'>
        <div className='p-2'>
          <h2 className='h-9'>Навигация</h2>
        </div>

        <nav>
          <DesktopSidebarNavigation />
        </nav>
      </div>

      <Separator />
    </div>
  )
}

const Separator: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      data-decorative='true'
      className={cn('bg-border/50 my-4 w-px shrink-0 rounded-full', className)}
    />
  )
}

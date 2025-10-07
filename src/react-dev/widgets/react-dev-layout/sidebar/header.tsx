import { Link } from 'react-router'
import { Button } from '@ui/components'
import { cn } from '@ui/lib'
import { SettingsIcon } from 'lucide-react'

export const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={cn('flex flex-col overflow-hidden', className)}>
      <div className='p-2'>
        <div className='flex gap-2 p-2'>
          <Button
            asChild
            variant='gradient-primary-sky'
            size='icon'
            className='text-base font-bold tracking-tighter shadow'
          >
            <Link to='/'>RD</Link>
          </Button>
          <div className='flex flex-col'>
            <p className='text-sm'>
              Built by{' '}
              <a
                href='https://github.com/mzhvv'
                target='_blank'
                className='decoration-border hover:decoration-foreground leading-4.5 underline decoration-1 underline-offset-3'
              >
                mzhvv
              </a>
            </p>
            <p className='text-sidebar-foreground/70 text-xs tracking-[-0.018em]'>
              The source code is available on{' '}
              <a
                href='https://github.com/mzhvv/react-dev'
                target='_blank'
                className='decoration-border hover:decoration-foreground tracking-normal underline decoration-1 underline-offset-3'
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className='flex-1'></div>

      <div className='p-4'>
        <Button variant='ghost' className='w-full justify-start'>
          <SettingsIcon />
          Settings
        </Button>
      </div>
    </header>
  )
}

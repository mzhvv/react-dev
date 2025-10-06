import type { LucideIcon } from 'lucide-react'

import { Link } from 'react-router'
import { Folder, HomeIcon } from 'lucide-react'

import { Button } from '@/ui/components'

type _link = {
  path: string
  title: string
  icon: LucideIcon
}

const _links = [
  { path: '/', title: 'home', icon: HomeIcon },
  { path: '/projects', title: 'projects', icon: Folder },
] as const satisfies _link[]

const Header = () => {
  return (
    <div>
      <div className='flex items-center gap-2 p-2'>
        <Button
          asChild
          variant='gradient-primary-sky'
          size='icon'
          className='text-base font-semibold shadow'
        >
          <Link to='/' title='react-dev application logo' aria-label='react-dev application logo'>
            RD
          </Link>
        </Button>
        <div
          className='text-sidebar-foreground/70 grid flex-1 text-left font-medium'
          // -tracking-[0.020em]
        >
          <span className='truncate text-sm'>
            Built by{' '}
            <a
              href='https://github.com/mzhvv'
              target='_blank'
              rel='noopener noreferrer'
              title='Visit mzhvv GitHub profile (opens in new tab)'
              aria-label='Visit mzhvv GitHub profile (opens in new tab)'
              className='hover:text-primary underline decoration-1 underline-offset-2'
            >
              mzhvv
            </a>
          </span>
          <span className='truncate text-xs -tracking-[0.0025em]'>
            Source code is available on{' '}
            <a
              href='https://github.com/mzhvv/react-dev'
              target='_blank'
              rel='noopener noreferrer'
              title='View react-dev repository on GitHub (opens in new tab)'
              aria-label='View react-dev repository on GitHub (opens in new tab)'
              className='hover:text-primary underline decoration-1 underline-offset-2'
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export const ReactDevSidebar = () => {
  return (
    <aside className='sticky top-0 flex h-svh'>
      <div className='flex flex-1 flex-col *:p-2'>
        <Header />

        <div className='flex-1'>
          <nav>
            <ul>
              <LinkItems links={_links} />
            </ul>
          </nav>
        </div>

        <div></div>
      </div>
      <div className='bg-border my-4 w-px shrink-0 rounded-full' />
    </aside>
  )
}

const LinkItems: React.FC<{ links: _link[] }> = ({ links }) => {
  return links.map(link => (
    <li key={link.path}>
      <Button asChild variant='ghost'>
        <Link to={link.path}>
          <link.icon />
          {link.title}
        </Link>
      </Button>
    </li>
  ))
}

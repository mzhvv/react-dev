import {
  NAVIGATION_APPLICATION_SECTION,
  NAVIGATION_AUTHOR_SECTION,
  NAVIGATION_DEVELOPMENT_SECTION,
  NAVIGATION_PROJECTS_SECTION,
  NAVIGATION_SECONDARY_SECTION,
} from '@navigation'

import { NavigationSections } from '@react-dev/shared/ui'

export const ReactDevPage = () => {
  return (
    <main className='mx-auto max-w-screen-sm space-y-12 pt-12 text-center'>
      <header className='space-y-12'>
        <div>
          <h1>Welcome in react-dev</h1>
          <p>
            Built by{' '}
            <a
              href='https://github.com/mzhvv'
              target='_blank'
              className='decoration-border hover:decoration-foreground underline decoration-1 underline-offset-3'
            >
              mzhvv
            </a>
            . The source code is available on{' '}
            <a
              href='https://github.com/mzhvv/react-dev'
              target='_blank'
              className='decoration-border hover:decoration-foreground underline decoration-1 underline-offset-3'
            >
              GitHub
            </a>
          </p>
        </div>
        <p>Workspace for React development</p>
      </header>

      <section>
        <div className='flex justify-center gap-2'>
          <NavigationSections
            navigationSections={[NAVIGATION_APPLICATION_SECTION, NAVIGATION_AUTHOR_SECTION]}
            variant='page'
          />
        </div>
      </section>

      <section>
        <div className='flex justify-center gap-2'>
          <NavigationSections
            navigationSections={[
              NAVIGATION_PROJECTS_SECTION,
              NAVIGATION_DEVELOPMENT_SECTION,
              NAVIGATION_SECONDARY_SECTION,
            ]}
            variant='page'
          />
        </div>
      </section>
    </main>
  )
}

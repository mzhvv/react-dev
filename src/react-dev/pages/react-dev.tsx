import {
  NAVIGATION_APPLICATION_SECTION,
  NAVIGATION_AUTHOR_SECTION,
  NAVIGATION_DEVELOPMENT_SECTION,
  NAVIGATION_PROJECTS_SECTION,
  NAVIGATION_SECONDARY_SECTION,
} from '@navigation'
import { SidebarReactDevNavigationLists } from '@/react-dev/widgets/react-dev-layout/sidebar/navigation-lists'

export const ReactDevPage = () => {
  return (
    <main className='mx-auto max-w-screen-sm space-y-8 pt-8 text-center'>
      <header className='space-y-8'>
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
        <div className='flex justify-center'>
          <SidebarReactDevNavigationLists
            navigationSections={[NAVIGATION_APPLICATION_SECTION, NAVIGATION_AUTHOR_SECTION]}
          />
        </div>
      </section>

      <section>
        <div className='flex justify-center'>
          <SidebarReactDevNavigationLists
            navigationSections={[
              NAVIGATION_PROJECTS_SECTION,
              NAVIGATION_DEVELOPMENT_SECTION,
              NAVIGATION_SECONDARY_SECTION,
            ]}
          />
        </div>
      </section>
    </main>
  )
}

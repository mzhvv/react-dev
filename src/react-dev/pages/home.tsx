import { Header, Main } from '@ui/layout-system'

import { NavigationSection } from '@react-dev/widgets/home'

export const HomePage = () => {
  return (
    <Main className='space-y-8'>
      <Header>
        <h1>react-dev</h1>
        {/* <p>React Development Workspace</p> */}
        <p>Рабочее пространство для разработки на React</p>
        {/* <p>
          Developed by{' '}
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
        </p> */}
        <p>
          Разработано{' '}
          <a
            href='https://github.com/mzhvv'
            target='_blank'
            className='decoration-border hover:decoration-foreground underline decoration-1 underline-offset-3'
          >
            mzhvv
          </a>
          . Исходный код доступен на{' '}
          <a
            href='https://github.com/mzhvv/react-dev'
            target='_blank'
            className='decoration-border hover:decoration-foreground underline decoration-1 underline-offset-3'
          >
            GitHub
          </a>
        </p>
      </Header>

      <NavigationSection />
    </Main>
  )
}

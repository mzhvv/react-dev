export const HomePage = () => {
  return (
    <main className='mx-auto max-w-screen-sm space-y-4 pt-4 text-center'>
      <header className='space-y-4'>
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
    </main>
  )
}

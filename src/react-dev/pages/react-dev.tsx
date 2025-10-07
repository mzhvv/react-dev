import { NAVIGATION_SECTIONS } from '@navigation'
import { SidebarReactDevNavigationLists } from '@/react-dev/widgets/react-dev-layout/sidebar/navigation-lists'

export const ReactDevPage = () => {
  return (
    <main className='mx-auto max-w-screen-sm space-y-24 pt-4 text-center'>
      <header>
        <h1>Welcome in react-dev</h1>
        <p>Workspace for React development</p>
        <p className='text-sm'>
          Built by{' '}
          <a
            href='https://github.com/mzhvv'
            target='_blank'
            className='decoration-border hover:decoration-foreground leading-4.5 underline decoration-1 underline-offset-3'
          >
            mzhvv
          </a>
          . The source code is available on{' '}
          <a
            href='https://github.com/mzhvv/react-dev'
            target='_blank'
            className='decoration-border hover:decoration-foreground tracking-normal underline decoration-1 underline-offset-3'
          >
            GitHub
          </a>
        </p>
      </header>

      <section>
        <header>
          <h2>apps</h2>
          <p className='text-sm leading-none font-medium'>Workspace for React development</p>
        </header>
        <div className='flex justify-center'>
          <SidebarReactDevNavigationLists navigationArray={NAVIGATION_SECTIONS} />
        </div>
      </section>
    </main>
  )
}

// import { useState } from 'react'
// import reactLogo from '../shared/assets/react.svg'
// import viteLogo from '/vite.svg'

// export const App = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href='https://vite.dev' target='_blank'>
//           <img src={viteLogo} className='logo' alt='Vite logo' />
//         </a>
//         <a href='https://react.dev' target='_blank'>
//           <img src={reactLogo} className='logo react' alt='React logo' />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className='card'>
//         <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
//     </>
//   )
// }

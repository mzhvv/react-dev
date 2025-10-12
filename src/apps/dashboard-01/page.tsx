// src/apps/dashboard-01/page.tsx

/*

vite v7.1.9 building for production...
✓ 8519 modules transformed.
dist/index.html                                       0.46 kB │ gzip:   0.29 kB
dist/assets/index-CqU-RnWR.css                       85.51 kB │ gzip:  14.10 kB
dist/assets/label-m6Rzw58S.js                         0.61 kB │ gzip:   0.40 kB
dist/assets/theme-radio-group-variants-VR-J9PZK.js    2.11 kB │ gzip:   0.69 kB
dist/assets/index-Dbc6IcXH.js                       368.12 kB │ gzip: 117.68 kB
dist/assets/page-DV2oeeuf.js                        758.27 kB │ gzip: 210.67 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 22.02s

//

npm run build

> react-dev@0.0.0 build
> tsc -b && vite build

vite v7.1.9 building for production...
✓ 7803 modules transformed.
dist/index.html                                       0.46 kB │ gzip:   0.29 kB
dist/assets/index-CqU-RnWR.css                       85.51 kB │ gzip:  14.10 kB
dist/assets/theme-radio-group-variants-AMvMa97E.js    2.62 kB │ gzip:   0.93 kB
dist/assets/page-C6R4ryx3.js                         86.46 kB │ gzip:  25.84 kB
dist/assets/index-5V7w2ccr.js                       367.73 kB │ gzip: 117.48 kB
✓ built in 14.46s
*/

import { AppSidebar } from '@/ui/blocks/dashboard-01/app-sidebar'
import { SiteHeader } from '@/ui/blocks/dashboard-01/site-header'
import { SidebarInset, SidebarProvider } from '@/ui/components/sidebar'

// import { ChartAreaInteractive } from '@/ui/blocks/dashboard-01/chart-area-interactive'
// import { DataTable } from '@/ui/blocks/dashboard-01/data-table'
// import { SectionCards } from '@/ui/blocks/dashboard-01/section-cards'
// import data from './data.json'

export const Dashboard01Page = () => {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant='inset' />
      <SidebarInset>
        <SiteHeader />

        {/* <div className='flex flex-1 flex-col'>
          <div className='@container/main flex flex-1 flex-col gap-2'>
            <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
              <SectionCards />
              <div className='px-4 lg:px-6'>
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div> */}

        <div>...</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

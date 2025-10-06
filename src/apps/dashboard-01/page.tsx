import { AppSidebar } from '@/ui/blocks/dashboard-01/app-sidebar'
import { ChartAreaInteractive } from '@/ui/blocks/dashboard-01/chart-area-interactive'
import { DataTable } from '@/ui/blocks/dashboard-01/data-table'
import { SectionCards } from '@/ui/blocks/dashboard-01/section-cards'
import { SiteHeader } from '@/ui/blocks/dashboard-01/site-header'

import { SidebarInset, SidebarProvider } from '@/ui/components/sidebar'

import data from './data.json'

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
        <div className='flex flex-1 flex-col'>
          <div className='@container/main flex flex-1 flex-col gap-2'>
            <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
              <SectionCards />
              <div className='px-4 lg:px-6'>
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

// src/apps/__template-app__/pages/template-app-layout.tsx

import { Outlet } from 'react-router'

import { TemplateAppLayoutHeader } from '@template-app/widgets/template-app-layout-header'

export const TemplateAppLayout = () => {
  return (
    <div>
      <TemplateAppLayoutHeader />
      <Outlet />
    </div>
  )
}

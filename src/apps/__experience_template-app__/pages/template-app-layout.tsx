// src/apps/__template-app-experience__/pages/template-app-layout.tsx

import { Outlet } from 'react-router'

import { TemplateAppLayoutHeader } from '../widgets/template-app-layout-header'

export const TemplateAppLayout = () => {
  return (
    <div>
      <TemplateAppLayoutHeader />
      <Outlet />
    </div>
  )
}

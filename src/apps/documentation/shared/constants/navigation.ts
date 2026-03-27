// src/apps/documentation/shared/constants/navigation.ts

import { useTranslation } from 'react-i18next'

function useGetDomainConstants() {
  const { t } = useTranslation('mainSidebarNavigation')

  const domain = { title: t('mainSidebarNavigation.domain.documentation.title') }
  return domain
}

export const NAVIGATION = {
  useGetDomainConstants,
}

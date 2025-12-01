// src/react-dev/__aggregator__/constants.ts

// import { useTranslation } from 'react-i18next'
import { HeartIcon } from 'lucide-react'

import { appsConstantsNavigationDomainLink } from '@apps/accumulators/constants'
import type { SectionNavigationKey } from '@core/libs/navigation'

function useRootConstantsNavigationDomainLink() {
  // const { t } = useTranslation()

  return {
    '/': {
      relativePath: '/',
      absolutePath: '/',
      title: 'Главная',
      icon: HeartIcon,
    },
  }
}

export function useConstantsGlobalNavigation() {
  // const { t } = useTranslation()

  const section = {
    application: 'Приложение',
    author: 'Автор',
    projects: 'Проекты',
    development: 'Development',
  } as const satisfies Record<SectionNavigationKey, string>

  const links = {
    ...useRootConstantsNavigationDomainLink(),
    ...appsConstantsNavigationDomainLink,
  }
  return {
    section,
    links,
  }
}

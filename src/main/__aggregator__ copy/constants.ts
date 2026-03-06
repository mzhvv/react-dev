// src/main/__aggregator__/constants.ts

// import { useTranslation } from 'react-i18next'
import { HeartIcon } from 'lucide-react'

import type { SectionNavigation } from '@mzhvv/libs/routers/react-router/navigation/types'
import { appsConstantsNavigationDomainLink } from '@accumulator/constants'

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
  } as const satisfies Record<SectionNavigation, string>

  const links = {
    ...useRootConstantsNavigationDomainLink(),
    ...appsConstantsNavigationDomainLink,
  }
  return {
    section,
    links,
  }
}

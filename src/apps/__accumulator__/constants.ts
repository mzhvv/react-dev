// src/apps/__accumulator__/constants.ts

import { useTranslation } from 'react-i18next'

// #region navigation

import type { ConstantSectionMap } from '@core/configs/framework/dataConfig/navigation'

import { documentationDataConfig } from '@documentation'

export function useAppsNavigationConstants() {
  const { t } = useTranslation('mainSidebarNavigation')

  const appsNavigationConstants = {
    shared: {
      heading: {
        title: t('mainSidebarNavigation.shared.heading.title'),
      },
    } as const,

    section: {
      development: { title: t('mainSidebarNavigation.sections.development.title') },
      projects: { title: t('mainSidebarNavigation.sections.projects.title') },
    } as const satisfies ConstantSectionMap,

    domainLinksMAP: {
      ...documentationDataConfig.CONSTANTS.NAVIGATION.DOMAIN.useGetDomainConstants.documentation,
    } as const,
  } as const

  return appsNavigationConstants
}

// #endregion

const APPS_CONSTANTS = {
  useNavigation: useAppsNavigationConstants,
} as const

export { APPS_CONSTANTS }

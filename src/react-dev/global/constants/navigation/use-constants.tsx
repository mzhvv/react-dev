// src/react-dev/global/constants/navigation/use-constants.tsx

import { useTranslation } from 'react-i18next'

import type { NavigationSectionKey } from '@global/navigation'

import {
  // reactdevNavigationConstants,
  useReactdevNavigationConstants,
} from '@react-dev/shared/constants/navigation'
import {
  APPS_CONSTANTS_ACCUMULATE,
  // APPS_CONSTANTS_ACCUMULATE_HOOK
} from '@apps/accumulators'

export function useGlobalNavigationConstants() {
  const { t } = useTranslation('common')

  const { reactdevParentLink } = useReactdevNavigationConstants()

  // const {
  //   useDashboard01NavigationConstants,
  //   useProject0NavigationConstants,
  //   useUiNavigationConstants,
  // } = APPS_CONSTANTS_ACCUMULATE_HOOK
  // const { dashboard01ParentLink } = useDashboard01NavigationConstants()
  // const { project0ParentLink } = useProject0NavigationConstants()
  // const { uiParentLink } = useUiNavigationConstants()

  // const { reactdevParentLink } = reactdevNavigationConstants
  const { dashboard01ParentLink, project0ParentLink, uiParentLink } = APPS_CONSTANTS_ACCUMULATE

  const constants = {
    group: {
      application: t('') || 'Приложение', // 'Application',
      author: t('') || 'Автор', //'Author',
      projects: t('') || 'Проекты', // 'Projects',
      development: t('') || 'Development',
    } as const satisfies Record<NavigationSectionKey, string>,
    link: {
      ...reactdevParentLink,
      ...dashboard01ParentLink,
      ...project0ParentLink,
      ...uiParentLink,
    },
  }

  return constants
}

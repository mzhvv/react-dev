// src/apps/__accumulators__/constants.ts
/** @description аккомулируем только нужные данные! */

import { useTemplateAppConstants } from '@apps/__template-app__'
import { useUiConstants } from '@apps/ui'
import { useDashboard01NConstants } from '@apps/dashboard-01'

type AppDomainNavigationLinks = ''
export function useAppDomainNavigationLinks() {
  const { DOMAIN_NAVIGATION_LINKS: TEMPLATE_APP_DOMAIN_NAVIGATION_LINKS } =
    useTemplateAppConstants()
  const { DOMAIN_NAVIGATION_LINKS: UI_DOMAIN_NAVIGATION_LINKS } = useUiConstants()
  const { DOMAIN_NAVIGATION_LINKS: DASHBOARD01_DOMAIN_NAVIGATION_LINKS } =
    useDashboard01NConstants()

  return {
    TEMPLATE_APP_DOMAIN_NAVIGATION_LINKS,
    UI_DOMAIN_NAVIGATION_LINKS,
    DASHBOARD01_DOMAIN_NAVIGATION_LINKS,
  } as const
}

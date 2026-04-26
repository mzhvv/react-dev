// src/apps/settings/index.ts

import { route } from './app/route'
import { SettingsDialog } from './macrowidgets/settings-dialog'

type MicrofrontendConfig = unknown

export const settingsMicrofrontendConfig = {
  route,
  macrowidgets: { settingsDialog: SettingsDialog },
} as const satisfies MicrofrontendConfig

// src/apps/settings/macrowidgets/settings-dialog.tsx

import { type DialogConstants, Dialog } from '@packages/ui/shadcn/components/dialog'

import { LocalizationLanguage } from '../widgets/localization/language'
import { ThemeColor } from '../widgets/theme/color'
import { ThemeMode } from '../widgets/theme/mode'
import { Settings2Icon } from 'lucide-react'

const DIALOG_CONSTANTS = {
  title: 'Settings Dialog',
  buttonOpen: { icon: <Settings2Icon /> },
} as const satisfies DialogConstants

export const SettingsDialog = () => {
  return (
    <Dialog meta={DIALOG_CONSTANTS}>
      <h2>Settings</h2>

      <section>
        <h3>Theme</h3>
        <ul>
          <li>
            <ThemeMode />
          </li>
          <li>
            <ThemeColor />
          </li>
        </ul>
      </section>

      <section>
        <h3>Localization</h3>
        <ul>
          <li>
            <LocalizationLanguage />
          </li>
        </ul>
      </section>
    </Dialog>
  )
}

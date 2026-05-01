// src/apps/settings/macrowidgets/settings-dialog.tsx

import { Settings2 } from 'lucide-react'

import {
  DialogBody,
  DialogContentDefault,
  DialogDefault,
  DialogHeaderDefault,
  DialogTitleDefault,
  DialogTriggerDefault,
} from '@packages/ui/shadcn/components/dialog'
import { Button } from '@packages/ui/shadcn/components/button'

import { LocalizationLanguage } from '../widgets/localization/language'
import { ThemeColor } from '../widgets/theme/color'
import { ThemeMode } from '../widgets/theme/mode'

const SettingsDialogTrigger = () => {
  return (
    <DialogTriggerDefault asChild>
      <Button variant='ghost' size='icon'>
        <Settings2 />
      </Button>
    </DialogTriggerDefault>
  )
}

const SettingsDialogContent = () => {
  return (
    <DialogContentDefault>
      <DialogHeaderDefault>
        <DialogTitleDefault>Settings</DialogTitleDefault>
      </DialogHeaderDefault>
      <DialogBody>
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
      </DialogBody>
    </DialogContentDefault>
  )
}

export const SettingsDialog = () => {
  return (
    <DialogDefault>
      <SettingsDialogTrigger />
      <SettingsDialogContent />
    </DialogDefault>
  )
}

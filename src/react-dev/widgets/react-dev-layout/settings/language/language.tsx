// src/react-dev/widgets/react-dev-layout/settings/language/language.tsx

import { useTranslation } from 'react-i18next'
import { LanguageSwitcherRadio } from '@global/libs/i18n'
import { Label2 } from '@ui/components/label-2'

export const Language = () => {
  const { t } = useTranslation('common')
  return (
    <div className=''>
      <h3>{t('settings.localization.heading')}</h3>
      <div>
        <Label2 className='px-0'>{t('settings.localization.label')}</Label2>
        <LanguageSwitcherRadio />
      </div>
    </div>
  )
}

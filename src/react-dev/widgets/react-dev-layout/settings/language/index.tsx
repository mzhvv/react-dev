// src/react-dev/widgets/react-dev-layout/settings/language/index.tsx

import { useTranslation } from 'react-i18next'
import { Label2 } from '@ui/components/label-2'
import { languageSwitcherRadioVariants, useLanguageSwitcher } from '@react-dev/features/i18n'

export const Language = () => {
  const { t } = useTranslation('common')
  const LanguageSwitcherRadio = languageSwitcherRadioVariants.getDefaultComponent()
  const { currentLang, languages, handleLanguageChange } = useLanguageSwitcher()

  return (
    <div className='p-2'>
      <h3>{t('settings.localization.heading')}</h3>
      <div>
        <Label2 className='px-0'>{t('settings.localization.label')}</Label2>
        <LanguageSwitcherRadio
          {...{ options: languages, value: currentLang, onValueChange: handleLanguageChange }}
        />
      </div>
    </div>
  )
}

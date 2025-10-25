import { LanguageSwitcherToggle } from '@global/libs/i18n'
import { Label2 } from '@ui/components/label-2'
import { useTranslation } from 'react-i18next'

export const Locales = () => {
  const { t } = useTranslation()
  return (
    <div className='p-2'>
      <h3>{t('settings.localization.heading')}</h3>
      <div>
        <Label2 className='px-0'>{t('settings.localization.label')}</Label2>
        <LanguageSwitcherToggle />
      </div>
    </div>
  )
}

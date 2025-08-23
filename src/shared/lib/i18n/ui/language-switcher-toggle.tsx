// src/shared/lib/i18n/ui/language-switcher-toggle.tsx

import { useTranslation } from 'react-i18next'
import { Toggle } from '@/shared/ui'

export const LanguageSwitcherToggle: React.FC = () => {
  const { i18n } = useTranslation()

  const currentLang = i18n.language.startsWith('ru') ? 'ru' : 'en'

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ru' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <Toggle
      size='icon-sm'
      variant='ghost-round'
      pressed={currentLang === 'ru'}
      onPressedChange={toggleLanguage}
      aria-label={`Switch language to ${currentLang === 'en' ? 'Русский' : 'English'}`}
    >
      <span
        className='flex items-center justify-center text-[14px] leading-none font-normal'
        aria-hidden='true'
      >
        {currentLang === 'en' ? 'EN' : 'RU'}
      </span>
    </Toggle>
  )
}

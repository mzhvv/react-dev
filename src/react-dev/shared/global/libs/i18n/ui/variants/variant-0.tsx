import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'
import { useTranslation } from 'react-i18next'
import { Label } from '@ui/components/label'

/* Variant0 */
export const LanguageSwitcherRadio: React.FC = () => {
  const { i18n } = useTranslation()

  const currentLang = i18n.language.startsWith('ru') ? 'ru' : 'en'

  const languages = ['ru', 'en'] as const

  const languagesMap = {
    ru: {
      label: 'RU',
      ariaLabel: 'Переключить на Русский',
      title: 'Русский',
    },
    en: {
      label: 'EN',
      ariaLabel: 'Switch to English',
      title: 'English',
    },
  } as const

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value)
  }

  return (
    <RadioGroup
      value={currentLang}
      onValueChange={handleLanguageChange}
      aria-label='Выбор языка интерфейса'
      className='flex h-8 items-center gap-4'
    >
      {languages.map(value => {
        const { label, title, ariaLabel } = languagesMap[value]

        return (
          <div key={value} className='flex items-center *:cursor-pointer'>
            <RadioGroupItem value={value} id={value} />
            <Label htmlFor={value} title={ariaLabel} aria-label={ariaLabel} className='pl-2'>
              {title}
            </Label>
          </div>
        )
      })}
    </RadioGroup>
  )
}

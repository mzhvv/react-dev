import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'
import { Label } from '@ui/components/label'

import type { LanguageSwitcherRadioVariantsProps } from '../../types'
import { languagesMap } from '../constants'

/* Variant0 */
export const LanguageSwitcherRadio: React.FC<LanguageSwitcherRadioVariantsProps> = ({
  currentLang,
  languages,
  handleLanguageChange,
}) => {
  return (
    <RadioGroup
      value={currentLang}
      onValueChange={handleLanguageChange}
      aria-label='Выбор языка интерфейса'
      className='flex h-8 items-center gap-4'
    >
      {languages.map(value => {
        const {
          // label,
          title,
          ariaLabel,
        } = languagesMap[value]

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

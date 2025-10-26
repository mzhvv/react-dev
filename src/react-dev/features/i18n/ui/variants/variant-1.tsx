import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'

import type { LanguageSwitcherRadioVariantsProps } from '../../types'
import { languagesMap } from '../constants'

/* Variant1 */
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
      className='grid grid-cols-2 gap-3'
    >
      {languages.map(value => {
        const {
          // label,
          title,
          ariaLabel,
        } = languagesMap[value]

        return (
          <div
            key={value}
            className={cn(
              'outline-input relative h-8 rounded-md shadow-xs outline',
              'has-data-[state=checked]:outline-primary/50 has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]'
            )}
          >
            <RadioGroupItem
              id={value}
              value={value}
              className='absolute top-2 left-2 size-4' // sr-only - при необходимости
            />
            <label
              htmlFor={value}
              title={ariaLabel}
              aria-label={ariaLabel}
              className='flex size-full cursor-pointer items-center justify-center text-sm after:absolute after:inset-0'
            >
              {title}
            </label>
          </div>
        )
      })}
    </RadioGroup>
  )
}

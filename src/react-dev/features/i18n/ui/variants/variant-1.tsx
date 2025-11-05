import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'

import type { LocalizationRadioGroupProps } from '../../types'

export const LocalizationLanguageRadioGroup: React.FC<LocalizationRadioGroupProps> = ({
  localizationLanguagesUi: {
    state: { value, onValueChange },
    options,
  },
  CONSTANTS,
}) => {
  return (
    <RadioGroup
      {...{ value, onValueChange }}
      aria-label='Выбор языка интерфейса'
      className='grid grid-cols-2 gap-3'
    >
      {options.map(value => {
        const {
          // label,
          ariaLabel,
          title,
        } = CONSTANTS[value]

        return <Item key={value} {...{ value, title, ariaLabel }} />
      })}
    </RadioGroup>
  )
}

const Item: React.FC<{ value: string; title: string; ariaLabel: string }> = ({
  value,
  title,
  ariaLabel,
}) => {
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
}

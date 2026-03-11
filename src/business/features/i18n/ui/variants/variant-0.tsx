import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'
import { Label } from '@ui/components/label'

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
      className='flex h-8 items-center gap-4'
    >
      {options.map(value => {
        const {
          // label,
          ariaLabel,
          title,
        } = CONSTANTS[value]

        return <Item key={value} {...{ value, ariaLabel, title }} />
      })}
    </RadioGroup>
  )
}

const Item: React.FC<{ value: string; ariaLabel: string; title: string }> = ({
  value,
  ariaLabel,
  title,
}) => {
  return (
    <div key={value} className='flex items-center *:cursor-pointer'>
      <RadioGroupItem value={value} id={value} />
      <Label htmlFor={value} title={ariaLabel} aria-label={ariaLabel} className='pl-2'>
        {title}
      </Label>
    </div>
  )
}

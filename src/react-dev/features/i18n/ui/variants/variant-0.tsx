import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'
import { Label } from '@ui/components/label'

import type { LanguageSwitcherRadioProps } from '../../types'
import { languagesMap } from '../constants'
import type React from 'react'

/* Variant0 */
export const LanguageSwitcherRadio: React.FC<LanguageSwitcherRadioProps> = ({
  value,
  onValueChange,
  options,
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
          title,
          ariaLabel,
        } = languagesMap[value]

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

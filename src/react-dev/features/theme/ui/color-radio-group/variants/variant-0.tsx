// src/react-dev/features/theme/ui/color-radio-group/variants/variant-0.tsx

import { colorMap } from '@styles'

import { colorOptionMap } from '@react-dev/entity/theme/ui/constants'

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'

import type { ColorRadioGroupProps } from '../../../types' // '@react-dev/features/theme'

export const ColorRadioGroup: React.FC<ColorRadioGroupProps> = ({ options, ...props }) => {
  return (
    <RadioGroup
      aria-label='Выбор цветовой схемы'
      className='flex h-8 items-center gap-1.5'
      {...props}
    >
      {options.map(option => {
        const {
          value,
          // label,
          specialLabel,
        } = colorOptionMap[option]

        const id = `variant-0-${value}`
        const aria = `Переключить на ${specialLabel} цветовую схему` // `Переключить на цветовую схему «${label}»`

        return (
          <RadioGroupItem
            key={id}
            value={value}
            title={aria}
            aria-label={aria}
            className={cn(
              'size-7',
              'border-none', // data-[state=checked]:border-input border-input
              '[&_[data-slot=radio-group-indicator]_svg]:fill-background text-background [&_[data-slot=radio-group-indicator]_svg]:size-2.5',
              colorMap[option]
            )}
          />
        )
      })}

      {/* {Array.from({ length: 1 }, (_, i) => ({ value: `disabled-variant4-${i + 1}` })).map(
        option => (
          <RadioGroupItem key={option.value} disabled value={option.value} className='size-7' />
        )
      )} */}
    </RadioGroup>
  )
}

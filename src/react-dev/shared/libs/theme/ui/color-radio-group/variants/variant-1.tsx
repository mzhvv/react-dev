// src/react-dev/shared/libs/theme/ui/color-radio-group/variants/variant-1.tsx

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'

import type { ColorRadioGroupProps } from '../../types'
import { colorMap } from '../../css-variables'

export const ColorRadioGroup: React.FC<ColorRadioGroupProps> = ({ options, ...props }) => {
  return (
    <RadioGroup aria-label='Choose color scheme' className='flex gap-1.5' {...props}>
      {options.map(option => (
        <RadioGroupItem
          key={option}
          value={option}
          title={`Switch to "${option}" color scheme`}
          aria-label={`Switch to "${option}" color scheme`}
          className={cn(
            'size-7',
            'border-none', // data-[state=checked]:border-input border-input
            '[&_[data-slot=radio-group-indicator]_svg]:fill-background text-background [&_[data-slot=radio-group-indicator]_svg]:size-2.5',
            colorMap[option]
          )}
        />
      ))}

      {Array.from({ length: 1 }, (_, i) => ({ value: `disabled-${i + 1}` })).map(option => (
        <RadioGroupItem key={option.value} disabled value={option.value} className='size-7' />
      ))}
    </RadioGroup>
  )
}

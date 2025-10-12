// src/react-dev/shared/libs/theme/ui/color-radio-group/variants/variant-1.tsx

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'

import type { ColorRadioGroupProps } from '../../types'
import { colorMap } from '../../constants'

export const ColorRadioGroup: React.FC<ColorRadioGroupProps> = ({
  options,
  color,
  onColorChange,
}) => {
  return (
    <RadioGroup
      value={color}
      onValueChange={onColorChange}
      aria-label='Choose color scheme'
      className='flex gap-1.5'
    >
      {options.map(option => (
        <RadioGroupItem
          key={option.value}
          value={option.value}
          title={`Switch to "${option.label}" color scheme`}
          aria-label={`Switch to "${option.label}" color scheme`}
          className={cn(
            'size-7',
            'border-none', // data-[state=checked]:border-input border-input
            '[&_[data-slot=radio-group-indicator]_svg]:fill-background text-background [&_[data-slot=radio-group-indicator]_svg]:size-2.5',
            colorMap[option.value]
          )}
        />
      ))}

      {Array.from({ length: 1 }, (_, i) => ({ value: `disabled-${i + 1}` })).map(option => (
        <RadioGroupItem key={option.value} disabled value={option.value} className='size-7' />
      ))}
    </RadioGroup>
  )
}

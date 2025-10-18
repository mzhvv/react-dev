import { colorMap } from '@styles'

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'

import type { ColorRadioGroupProps } from '../../../types'
import { colorOptionMap } from '../../../constants'

/* Variant0 */
const ColorRadioGroup: React.FC<ColorRadioGroupProps> = ({ options, ...props }) => {
  return (
    <RadioGroup aria-label='Choose color scheme' className='flex gap-1.5' {...props}>
      {options.map(option => {
        const { value, label } = colorOptionMap[option]

        const id = `variant4-${value}`
        const aria = `Switch to "${label}" color scheme`

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

export { ColorRadioGroup as Variant0 }

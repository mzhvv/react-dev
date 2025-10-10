// src/react-dev/shared/libs/theme/ui/color-radio-group.tsx

// src/react-dev/shared/libs/theme/ui/color-radio-group.tsx

import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'
import { useTheme } from '../hooks'
import type { Color } from '../types'
import { cn } from '@ui/lib'
import { colorMap } from '../constants'

const colors = [
  { value: 'default', label: 'Default' },
  { value: 'blue', label: 'Blue' },
] as const satisfies {
  value: Color
  label: string
}[]

export function ColorRadioGroup() {
  const { color, setColor } = useTheme()
  const onColorChange = (value: string) => setColor(value as Color)

  return (
    <fieldset className='space-y-3'>
      <legend className='text-foreground text-sm leading-none font-medium'>Choose a color</legend>
      <RadioGroup value={color} onValueChange={onColorChange} className='flex gap-1.5'>
        {colors.map(item => (
          <RadioGroupItem
            key={item.value}
            value={item.value}
            aria-label={item.label}
            className={cn(
              'size-7 cursor-pointer shadow-xs',
              'border-none', // data-[state=checked]:border-input border-input
              '[&_[data-slot=radio-group-indicator]_svg]:fill-background text-background [&_[data-slot=radio-group-indicator]_svg]:size-2.5',
              colorMap[item.value]
            )}
          />
        ))}
      </RadioGroup>
    </fieldset>
  )
}

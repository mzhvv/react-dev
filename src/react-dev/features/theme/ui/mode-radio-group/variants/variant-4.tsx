// src/react-dev/features/theme/ui/mode-radio-group/variants/variant-4.tsx

import { modeOptionMap } from '../../constants'

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'

import type { ModeRadioGroupProps } from '../../../types'

/* Variant4 */
const ThemeRadioGroup: React.FC<ModeRadioGroupProps> = ({ options, ...props }) => {
  return (
    <RadioGroup {...props} aria-label='Choose theme' className='grid grid-cols-3 gap-3'>
      {options.map(option => {
        const { value, label, image } = modeOptionMap[option]

        const id = `variant4-${value}`
        const aria = `Switch to "${label}" theme`
        const alt = `Preview of ${label} theme`

        return (
          <div
            key={id}
            className={cn(
              'outline-input relative overflow-hidden rounded-md shadow-xs outline',

              'has-data-[state=checked]:outline-primary/50 has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]'
            )}
          >
            <RadioGroupItem
              id={id}
              value={value}
              className='bg-background/50 dark:bg-background/50 absolute top-2 left-2 size-4' // sr-only - при необходимости
            />
            <label
              htmlFor={id}
              title={aria}
              aria-label={aria}
              className={cn('cursor-pointer after:absolute after:inset-0')}
            >
              <img
                src={image}
                alt={alt}
                loading='lazy'
                className='aspect-[44/35] size-full object-cover'
              />
            </label>
          </div>
        )
      })}
    </RadioGroup>
  )
}

export { ThemeRadioGroup as Variant4 }

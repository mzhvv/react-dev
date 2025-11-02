// src/react-dev/features/theme/ui/mode-radio-group/variants/variant-4.tsx

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'
import { Image } from '@ui/components/image'

import type { ModeRadioGroupProps } from '../../../types'

/* Variant4 */
const ThemeRadioGroup: React.FC<ModeRadioGroupProps> = ({ state, options, CONSTANTS }) => {
  return (
    <RadioGroup aria-label='Choose theme' className='grid grid-cols-3 gap-3' {...state}>
      {options.map(option => {
        const { value, title, ariaLabel, image } = CONSTANTS[option]

        const id = `variant4-${value}`

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
              title={title}
              aria-label={title || ariaLabel}
              className={cn('cursor-pointer after:absolute after:inset-0')}
            >
              <Image {...{ image, width: 176, height: 140, loading: 'lazy', decoding: 'async' }} />
            </label>
          </div>
        )
      })}
    </RadioGroup>
  )
}

export { ThemeRadioGroup as Variant4 }

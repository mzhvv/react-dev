// src/react-dev/shared/libs/theme/ui/theme-radio-group/variants/variant-4.tsx

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'

import type { ThemeRadioGroupProps } from '../../types'

export const ThemeRadioGroup: React.FC<ThemeRadioGroupProps> = ({
  options,
  theme,
  onThemeChange,
  id,
}) => {
  return (
    <RadioGroup
      value={theme}
      onValueChange={onThemeChange}
      aria-label='Choose theme'
      className='grid grid-cols-3 gap-3'
    >
      {options.map(option => (
        <div
          key={`${id}-${option.value}`}
          className={cn(
            'outline-input relative overflow-hidden rounded-md shadow-xs outline',

            'has-data-[state=checked]:outline-primary/50 has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]'
          )}
        >
          <RadioGroupItem
            id={`${id}-${option.value}`}
            value={option.value}
            className='bg-background/50 dark:bg-background/50 absolute top-2 left-2 size-4' // sr-only - при необходимости
          />
          <label
            htmlFor={`${id}-${option.value}`}
            title={`Switch to "${option.label}" theme`}
            aria-label={`Switch to "${option.label}" theme`}
            className={cn('cursor-pointer after:absolute after:inset-0')}
          >
            <img
              src={option.image}
              alt={`Preview of ${option.label} theme`}
              className='aspect-[44/35] size-full object-cover'
            />
          </label>
        </div>
      ))}
    </RadioGroup>
  )
}

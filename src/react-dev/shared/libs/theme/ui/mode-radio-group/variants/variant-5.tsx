// src/react-dev/shared/libs/theme/ui/theme-radio-group/variants/variant-5.tsx

import { useState } from 'react'

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'

import type { ThemeOption, ThemeRadioGroupProps } from '../../types'
import { Image } from '../../Image'

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
        <ThemeRadioGroupItem key={option.value} {...{ option, id }} />
      ))}
    </RadioGroup>
  )
}

const ThemeRadioGroupItem: React.FC<{ option: ThemeOption } & Pick<ThemeRadioGroupProps, 'id'>> = ({
  option,
  id,
}) => {
  const [imageError, setImageError] = useState(false)
  const onImageErrorChange = () => setImageError(true)

  return (
    <label htmlFor={`${id}-${option.value}`} className='relative'>
      <RadioGroupItem
        id={`${id}-${option.value}`}
        value={option.value}
        className='peer bg-background/50 dark:bg-background/50 absolute top-2 right-2 size-4'
      />

      {/* <img
        src={option.image}
        title={`Switch to "${option.label}" theme`}
        // aria-label={`Switch to "${option.label}" theme`}
        alt={`Preview of ${option.label} theme`}
        onError={onImageErrorChange}
        className={cn(
          'outline-input cursor-pointer overflow-hidden rounded-md shadow-xs outline',

          'peer-focus-visible:ring-ring/50 peer-data-[state=checked]:outline-primary/50 peer-focus-visible:ring-[3px]',

          'aspect-[44/35] size-full object-cover'
        )}
      /> */}

      <Image
        src={option.image}
        title={`Switch to "${option.label}" theme`}
        // aria-label={`Switch to "${option.label}" theme`}
        alt={`Preview of ${option.label} theme`}
        onError={onImageErrorChange}
        className={cn(
          'outline-input cursor-pointer overflow-hidden rounded-md shadow-xs outline',

          'peer-focus-visible:ring-ring/50 peer-data-[state=checked]:outline-primary/50 peer-focus-visible:ring-[3px]',

          'aspect-[44/35] size-full object-cover'
        )}
      />

      {!imageError && (
        <div aria-hidden='true'>
          <div className='absolute top-[23%] left-[22.9%] flex items-center gap-0.5'>
            <div className='bg-primary size-1.5 rounded-full' />
            <div className='bg-primary size-1.5 rounded-full' />
            <div className='bg-primary size-1.5 rounded-full' />
          </div>
          <div className='bg-primary absolute bottom-[5%] left-[5%] flex h-[10%] w-[90%] items-center gap-0.5 rounded-lg' />
        </div>
      )}
    </label>
  )
}

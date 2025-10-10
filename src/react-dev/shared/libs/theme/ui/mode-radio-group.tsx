// src/react-dev/shared/libs/theme/ui/mode-radio-group.tsx

import { useId } from 'react'

import { cn } from '@ui/lib'

import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'
import { Label } from '@ui/components/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@ui/components/accordion'

import { useTheme } from '../hooks'
import type { Theme } from '../types'

const items = [
  { value: 'system', label: 'System', image: '/ui-system.png' },
  { value: 'light', label: 'Light', image: '/ui-light.png' },
  { value: 'dark', label: 'Dark', image: '/ui-dark.png' },
] as const satisfies { value: Theme; label: string; image: string }[]

export function ModeRadioGroup() {
  const id = useId()
  const { theme, setTheme } = useTheme()
  const onValueChange = (value: string) => setTheme(value as Theme)

  return (
    <div className='space-y-3'>
      <fieldset className='space-y-3'>
        <legend className='text-foreground text-sm leading-none font-medium'>Choose a mode</legend>
        <RadioGroup value={theme} onValueChange={onValueChange} className='grid grid-cols-3 gap-3'>
          {items.map(item => (
            <label key={`${id}-${item.value}`} className='relative'>
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                className='peer bg-background/50 dark:bg-background/50 absolute top-2 right-2 size-4'
              />
              <img
                src={item.image}
                alt={item.label}
                className={cn(
                  'outline-input shadowl cursor-pointer overflow-hidden rounded-xs outline',

                  'peer-focus-visible:ring-ring/50 peer-data-[state=checked]:outline-primary/50 peer-focus-visible:ring-[3px]',

                  'aspect-[44/35] size-full object-cover'
                )}
              />

              <Decorative />
            </label>
          ))}
        </RadioGroup>
      </fieldset>

      <Hide>
        <Experience {...{ id, theme, onValueChange }} />
      </Hide>
    </div>
  )
}

const Decorative = () => {
  return (
    <div>
      <div className='absolute top-[23%] left-[22.9%] flex items-center gap-0.5'>
        <div className='bg-primary size-1.5 rounded-full' />
        <div className='bg-primary size-1.5 rounded-full' />
        <div className='bg-primary size-1.5 rounded-full' />
      </div>
      <div className='bg-primary absolute bottom-[5%] left-[5%] flex h-[10%] w-[90%] items-center gap-0.5 rounded-lg' />
    </div>
  )
}

const Hide: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='flex-none gap-2 p-0'>Variants</AccordionTrigger>
        <AccordionContent className='mt-2 p-0'>
          <div className='m-px space-y-3'>{children}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

const Experience: React.FC<{
  id: string
  theme: Theme
  onValueChange: (value: string) => void
}> = ({ id, theme, onValueChange }) => {
  return (
    <>
      <RadioGroup value={theme} onValueChange={onValueChange} className='flex items-center gap-3'>
        {items.map(item => (
          <div key={`${id}-${item.value}`} className='relative flex items-center gap-2 p-1'>
            <RadioGroupItem value={item.value} id={`${id}-${item.value}`} />
            <Label
              htmlFor={`${id}-${item.value}`}
              className='cursor-pointer after:absolute after:inset-0'
            >
              {item.label}
            </Label>
          </div>
        ))}
      </RadioGroup>

      {/* <RadioGroup value={theme} onValueChange={onValueChange} className='grid grid-cols-3 gap-3'>
        {items.map(item => (
          <div
            key={`${id}-${item.value}`}
            className={cn(
              'outline-input relative h-15 rounded-md shadow-xs outline',
              'has-data-[state=checked]:outline-primary/50 has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]'
            )}
          >
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className='absolute top-2 left-2 size-4' // sr-only - при необходимости
            />
            <label
              htmlFor={`${id}-${item.value}`}
              className='flex size-full cursor-pointer items-center justify-center after:absolute after:inset-0'
            >
              <span className='text-sm font-medium'>{item.label}</span>
            </label>
          </div>
        ))}
      </RadioGroup> */}

      <RadioGroup value={theme} onValueChange={onValueChange} className='grid grid-cols-3 gap-3'>
        {items.map(item => (
          <div key={`${id}-${item.value}`} className='relative'>
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className='peer absolute top-2 left-2 size-4' // sr-only - при необходимости
            />
            <label
              htmlFor={`${id}-${item.value}`}
              className={cn(
                'outline-input h-15 rounded-md shadow-xs outline',
                'peer-data-[state=checked]:outline-primary/50 peer-focus-visible:ring-ring/50 peer-focus-visible:ring-[3px]',

                'flex cursor-pointer items-center justify-center',

                'text-sm font-medium'
              )}
            >
              {item.label}
            </label>
          </div>
        ))}
      </RadioGroup>

      {/* <RadioGroup value={theme} onValueChange={onValueChange} className='grid grid-cols-3 gap-3'>
        {items.map(item => (
          <div
            key={`${id}-${item.value}`}
            className={cn(
              'outline-input relative overflow-hidden rounded-md shadow-xs outline',

              'has-data-[state=checked]:outline-primary/50 has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]'
            )}
          >
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className='bg-background/50 dark:bg-background/50 absolute top-2 left-2 size-4' // sr-only - при необходимости
            />
            <label
              htmlFor={`${id}-${item.value}`}
              className={cn('cursor-pointer after:absolute after:inset-0')}
            >
              <img
                src={item.image}
                alt={item.label}
                className='aspect-[44/35] size-full object-cover'
              />
            </label>
          </div>
        ))}
      </RadioGroup> */}
    </>
  )
}

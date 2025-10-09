// src/react-dev/shared/libs/theme/ui/mode-radio-group.tsx

import { useId } from 'react'

import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'
import { useTheme } from '../hooks'
import { Label } from '@ui/components/label'
import { cn } from '@ui/lib'
import type { Theme } from '../context'

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
    <div className='space-y-4'>
      <div>Choose a mode</div>

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

      <RadioGroup value={theme} onValueChange={onValueChange} className='grid grid-cols-3 gap-3'>
        {items.map(item => {
          const styles = {
            bg: {
              system: 'bg-gradient-to-r from-[#e4e4e7] from-50% to-[#27272a] to-50%',
              light: 'bg-[#e4e4e7] ',
              dark: 'bg-[#27272a]',
            },
            text: {
              system:
                'bg-gradient-to-r from-[#27272a] from-50% to-[#e4e4e7] to-50% bg-clip-text text-transparent',
              light: 'text-[#27272a]',
              dark: 'text-[#e4e4e7]',
            },
          } as const satisfies {
            bg: Record<Theme, string>
            text: Record<Theme, string>
          }
          return (
            <div key={`${id}-${item.value}`} className='relative'>
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                className='peer bg-background/50 dark:bg-background/50 absolute top-2 left-2 size-4' // sr-only - при необходимости
              />
              <label
                htmlFor={`${id}-${item.value}`}
                className={cn(
                  'outline-input h-15 rounded-md shadow-xs outline',
                  'peer-data-[state=checked]:outline-primary/50 peer-focus-visible:ring-ring/50 peer-focus-visible:ring-[3px]',

                  'flex cursor-pointer items-center justify-center',

                  styles.bg[item.value]
                )}
              >
                <span className={cn('text-sm font-medium', styles.text[item.value])}>
                  {item.label}
                </span>
              </label>
            </div>
          )
        })}
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

      <RadioGroup value={theme} onValueChange={onValueChange} className='grid grid-cols-3 gap-3'>
        {items.map(item => (
          <label key={`${id}-${item.value}`} className='relative'>
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className='peer bg-background/50 dark:bg-background/50 absolute top-2 left-2 size-4'
            />
            <img
              src={item.image}
              alt={item.label}
              className={cn(
                'outline-input cursor-pointer overflow-hidden rounded-md shadow-xs outline',

                'peer-focus-visible:ring-ring/50 peer-data-[state=checked]:outline-primary/50 peer-focus-visible:ring-[3px]',

                'aspect-[44/35] size-full object-cover'
              )}
            />
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}

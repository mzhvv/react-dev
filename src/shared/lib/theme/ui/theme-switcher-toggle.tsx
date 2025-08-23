// src/shared/lib/theme/ui/theme-switcher-toggle.tsx

import { MoonIcon, SunIcon } from 'lucide-react'
import { Toggle } from '@/shared/ui'
import { useTheme } from '@/shared/lib/theme'

export const ThemeSwitcherToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Toggle
      size='icon-sm'
      variant='ghost-round'
      className='group relative'
      pressed={theme === 'dark'}
      onPressedChange={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <MoonIcon
        size={16}
        className='size-4 opacity-0 group-data-[state=on]:opacity-100'
        aria-hidden='true'
      />
      <SunIcon
        size={16}
        className='absolute size-4 opacity-100 group-data-[state=on]:opacity-0'
        aria-hidden='true'
      />
    </Toggle>
  )
}

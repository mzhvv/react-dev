// src/shared/lib/i18n/ui/language-switcher-select.tsx

import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

import type { SelectTriggerProps } from '@/shared/ui'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  // SelectValue
} from '@/shared/ui'

export const LanguageSwitcherSelect: React.FC<SelectTriggerProps> = ({
  side,
  variant = 'ghost',
  size,
}) => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const OPTIONS: { value: string; selectValue: string; label: string }[] = [
    { value: 'en', selectValue: 'EN', label: 'English' },
    { value: 'ru', selectValue: 'RU', label: 'Русский' },
  ]

  const current = OPTIONS.find(option => option.value === i18n.language)

  return (
    <Select value={i18n.language} onValueChange={changeLanguage}>
      <SelectTrigger variant={variant} size={size} side={side} aria-label='Select language'>
        <Globe size={16} aria-hidden='true' />
        {/* <SelectValue /> */}
        <span aria-hidden='true' className='flex w-5 items-center justify-center'>
          {current?.selectValue}
        </span>
      </SelectTrigger>
      <SelectContent
        align='center'
        side={side}
        collisionPadding={24}
        className='min-w-[--radix-select-trigger-width]'
      >
        {OPTIONS.map(option => (
          <SelectItem key={option.value} value={option.value}>
            <span aria-hidden='true'>{option.label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

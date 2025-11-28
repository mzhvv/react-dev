// src/core/features/i18n/lib/update-html-lang.ts

import i18n from '../config/i18n'

export const updateHtmlLang = () => {
  const handleLanguageChange = (lng: string) => {
    const shortLang = lng.split('-')[0] // 'en-US' → 'en', 'ru-RU' → 'ru'
    document.documentElement.lang = shortLang
  }

  // Устанавливаем начальное значение
  handleLanguageChange(i18n.language)

  // Слушаем изменения языка
  i18n.on('languageChanged', handleLanguageChange)

  return () => {
    i18n.off('languageChanged', handleLanguageChange)
  }
}

// src/react-dev/shared/global/libs/i18n/use-update-html-lang.ts

/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const updateHtmlLang = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      const shortLang = lng.split('-')[0] // 'en-US' → 'en', 'ru-RU' → 'ru'
      document.documentElement.lang = shortLang
    }

    handleLanguageChange(i18n.language)

    i18n.on('languageChanged', handleLanguageChange)
    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [i18n])
}

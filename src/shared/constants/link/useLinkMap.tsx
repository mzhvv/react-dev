// src/shared/constants/link/useLinkMap.tsx

import { useTranslation } from 'react-i18next'

import { LINK_MAP_BY_KEY } from '@/shared/constants'

type UseLinkMap = Record<
  keyof typeof LINK_MAP_BY_KEY,
  {
    relativePath: string
    absolutePath: string
    label: string // уже переведённый
  }
>

export const useLinkMap = (): UseLinkMap => {
  const { t } = useTranslation()

  return Object.entries(LINK_MAP_BY_KEY).reduce((acc, [key, meta]) => {
    acc[key as keyof typeof LINK_MAP_BY_KEY] = {
      relativePath: meta.relativePath,
      absolutePath: meta.absolutePath,
      label: t(meta.labelKey),
    }
    return acc
  }, {} as UseLinkMap)
}

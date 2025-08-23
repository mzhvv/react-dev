// src/widgets/main/section.tsx

import { cva } from 'class-variance-authority'

import type { MainHashMavigation } from '@/shared/types'

import { cn } from '@/shared/utils'
import { Section } from '@/shared/ui'

// model/types

type DefaultSectionUnionIdentifier = { id: string } | { dataId?: string }

type DefaultSection = DefaultSectionUnionIdentifier & {
  children: React.ReactNode
  className?: string
}

export type ExpandDefaultSection<T> = Omit<DefaultSection, 'id' | 'dataId'> & { id?: T; dataId?: T }

type MainSectionIdentifier = MainHashMavigation | 'intro' | 'hash-nav'

// model/config

const centrallyConfiguredStyles = cva('', {
  variants: {
    variant: {
      intro: '',
      'hash-nav': 'h-15 min-h-auto',
    } as Record<'default' | MainSectionIdentifier, string>,
  },
})

// model/ui

export const HomeSection = ({
  id,
  dataId,
  className,
  ...props
}: ExpandDefaultSection<MainSectionIdentifier>) => {
  return (
    <Section.Component
      id={id}
      data-id={dataId}
      className={cn('', centrallyConfiguredStyles({ variant: id ?? dataId }), className)}
      {...props}
    />
  )
}

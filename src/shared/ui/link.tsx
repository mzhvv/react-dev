// src/shared/ui/link.tsx

import type { VariantProps } from 'class-variance-authority'
import { Link as DefaultLink } from 'react-router'

import type { DefaultExternalLink, DefaultHashLink, DefaultRouterLink } from '@/shared/types'
import type { buttonVariants } from '@/shared/ui'
import { Button } from '@/shared/ui'

type LinkWithButtonWrapperProps = {
  children: React.ReactNode
  variants?: VariantProps<typeof buttonVariants>
}

type LinkProps<T> = {
  link: T
  variants?: VariantProps<typeof buttonVariants>
}

const LinkWithButton: React.FC<LinkWithButtonWrapperProps> = ({
  variants: { variant, size } = {},
  children,
}) => {
  return (
    <Button asChild variant={variant ?? 'link2'} size={size ?? 'default'}>
      {children}
    </Button>
  )
}

/** @example <RouterLink link={{ to: '...', label: '...' }} variants={{ variant: '...', size: '...' }} /> */
export const RouterLink = <T extends DefaultRouterLink>({
  link: { label, ...link },
  variants,
}: LinkProps<T>) => {
  return (
    <LinkWithButton variants={variants}>
      <DefaultLink {...link}>{label}</DefaultLink>
    </LinkWithButton>
  )
}

/** @example <ExternalLink link={{ href: 'https://...', label: '...' }} variants={{ variant: '...', size: '...' }} /> */
export const ExternalLink = <T extends DefaultExternalLink>({
  link: { label, rel, ...link },
  variants,
}: LinkProps<T>) => {
  return (
    <LinkWithButton variants={variants}>
      <a {...link} target='_blank' rel={rel ?? 'noopener noreferrer'}>
        {label}
      </a>
    </LinkWithButton>
  )
}

/** @example <RouterLink link={{ href: '#...', label: '...' }} variants={{ variant: '...', size: '...' }} /> */
export const HashLink = <T extends DefaultHashLink>({
  link: { label, ...link },
  variants,
}: LinkProps<T>) => {
  return (
    <LinkWithButton variants={variants}>
      <a {...link}>{label}</a>
    </LinkWithButton>
  )
}

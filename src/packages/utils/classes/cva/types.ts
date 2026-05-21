// src/packages/utils/classes/cva/types.ts

import type { cva } from 'class-variance-authority'

export type CvaBase = {
  base: Parameters<typeof cva>[0] // string
}

export type CvaVariantsMap = Record<'variant' | 'size', Record<string, string>> // { variant: Record<string, string>; size: Record<string, string> }
export type CvaDefaultsMap = Record<'variant' | 'size', string> // { variant: string; size: string }
export type CvaOptions = {
  // ❌ NonNullable<Parameters<typeof cva>[1]> =>  undefined
  variants: { variants: CvaVariantsMap; defaultVariants: CvaDefaultsMap }
}

export type CvaClasses = CvaBase & CvaOptions

// src/packages/libs/classes/cva.ts

import type { cva } from 'class-variance-authority'

export type CvaConfig =
  // | NonNullable<Parameters<typeof cva>[1]> //  undefined
  {
    variants: {
      variants: { variant: Record<string, string>; size: Record<string, string> }
      defaultVariants: { variant: string; size: string }
    }
  }
export type CvaClasses = {
  base: Parameters<typeof cva>[0]
} & CvaConfig

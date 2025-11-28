// src/react-dev/shared/types/index.ts

export * from './rnc'
export * from '../../../core/types/utils'

// variant
export type Variant<T extends string | number> = `variant-${T}`
export type VariantId<T extends string | number> = `variant-${T}-${string}`

//

// src/react-dev/shared/types/index.ts

// router and navigation
export type RootRoutePath = '/'
export type DomainRoutePath = 'ui-component-variants' | 'about' | 'collaboration'
export type DomainRouteKey = 'uiComponentVariants' | 'about' | 'collaboration'

// variant
export type Variant<T extends string | number> = `variant-${T}`
export type VariantId<T extends string | number> = `variant-${T}-${string}`

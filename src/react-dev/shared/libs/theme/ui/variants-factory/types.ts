type FactoryVariantConfig<K extends PropertyKey, P> = Record<
  K,
  { component: React.ComponentType<P> }
>
export type { FactoryVariantConfig, FactoryVariantConfig as FactoryVariantObject }

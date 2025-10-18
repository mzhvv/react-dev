export type FactoryVariantConfig<K extends PropertyKey, P> = Record<
  K,
  { component: React.ComponentType<P> }
>

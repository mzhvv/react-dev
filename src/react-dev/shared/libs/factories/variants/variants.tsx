// src/react-dev/shared/libs/factories/variants/variants-strict.tsx

export type FactoryVariantConfig<K extends PropertyKey, P> = Record<
  K,
  { component: React.ComponentType<P> }
>

export function createVariantsFactory<
  K extends string, // PropertyKey,
  P,
  // T extends Record<K, { component: React.ComponentType<P> }> = Record<
  //   K,
  //   { component: React.ComponentType<P> }
  // >,
  T extends FactoryVariantConfig<K, P> = FactoryVariantConfig<K, P>,
>(config: T, defaultVariant: keyof T) {
  type Key = keyof T

  const keys = Object.keys(config) as Array<Key>
  const values = Object.values(config) as Array<T[Key]>
  const components = Object.values(config).map(value => (value as T[Key]).component)

  return {
    // Данные
    map: config,
    keys,
    values,

    components,
    // defaultVariant,

    // Методы
    getDefaultVariant: () => config[defaultVariant].component,
    getAdditionalVariants: () => {
      return values.filter(item => item !== config[defaultVariant]).map(item => item.component)
    },

    /** [defaultVariant, additionalVariants] */
    getSplitVariants: () => {
      const visibleComponent = config[defaultVariant].component
      const hiddenComponents = values
        .filter(item => item !== config[defaultVariant])
        .map(item => item.component)
      return [visibleComponent, hiddenComponents] as const
    },

    //

    // hasKey: (key: string) => key in config,
    // getVariant: (key: keyof T) => config[key].component,
    // findByVariant: (variant: React.ComponentType) =>
    //   keys.find(key => config[key].component === variant),
  }
}

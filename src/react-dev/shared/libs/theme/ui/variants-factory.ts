// src/react-dev/shared/libs/theme/ui/variants-factory.ts

export const createVariantsFactory = <
  P,
  T extends Record<string, { variant: React.ComponentType<P> }> = Record<
    string,
    { variant: React.ComponentType<P> }
  >,
>(
  config: T // T & { readonly [K in keyof T]: Readonly<T[K]> }
) => {
  const keys = Object.keys(config) as Array<keyof T> // Readonly<Array<keyof T>>
  const values = Object.values(config)
  // const variant = Object.values(config).map(v => v.variant)

  return {
    // Данные
    map: config,
    keys,
    // values,
    // variant,

    // Методы
    splitVisibilityVariants: (key: keyof T) => {
      const visibleComponent = config[key].variant
      const hiddenComponents = values.filter(item => item !== config[key])
      return [visibleComponent, hiddenComponents] as const
    },
    getVisibleVariant: (key: keyof T) => config[key].variant,
    getHiddenVariants: (key: keyof T) => {
      return values.filter(item => item !== config[key])
    },

    // getVariant: (key: keyof T) => config[key].variant,
    // hasKey: (key: string) => key in config,
    // getKeys: () => keys,
    // findByVariant: (variant: React.ComponentType) =>
    //   keys.find(key => config[key].variant === variant),
  }
}

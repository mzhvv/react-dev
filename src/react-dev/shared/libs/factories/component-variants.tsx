// src/react-dev/shared/libs/factories/component-variants.tsx

export type FactoryComponentVariantsConfig<Key extends string, ComponentType> = Record<
  Key,
  { component: React.ComponentType<ComponentType> }
>

export function createComponentVariantsFactory<
  Key extends string, // PropertyKey,
  ComponentType,
  T extends FactoryComponentVariantsConfig<Key, ComponentType> = FactoryComponentVariantsConfig<
    Key,
    ComponentType
  >,
>(config: T, defaultComponent: keyof T) {
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
    /** Возвращает компонент по умолчанию */
    getDefaultComponent: () => config[defaultComponent].component,
    /** Возвращает массив всех компонентов, кроме компонента по умолчанию */
    getNonDefaultComponents: () => {
      return values.filter(item => item !== config[defaultComponent]).map(item => item.component)
    },

    /** Возвращает кортеж [компонент по умолчанию, массив остальных компонентов] */
    getComponentGroups: () => {
      const DefaultComponent = config[defaultComponent].component
      const nonDefaultComponents = values
        .filter(item => item !== config[defaultComponent])
        .map(item => item.component)
      return [DefaultComponent, nonDefaultComponents] as const
    },

    // hasKey: (key: Key) => key in config,
    // getComponentByKey: (key: Key) => config[key].component,
    // findKeyByComponent: (component: React.ComponentType<ComponentType>) =>
    //   keys.find(key => config[key].component === component),
  }
}

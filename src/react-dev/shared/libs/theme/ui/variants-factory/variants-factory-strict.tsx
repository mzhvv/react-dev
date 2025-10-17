// src/react-dev/shared/libs/theme/ui/variants-factory/variants-factory-strict.tsx

import type { FactoryVariantConfig, FactoryVariantConfig as FactoryVariantObject } from './types'

/** Cтрогая типизация */
export function createVariantsFactoryStrict<
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
    defaultVariant,

    // Методы
    getDefaultVariant: () => config[defaultVariant].component,
    getOtherVarints: () => {
      return values.filter(item => item !== config[defaultVariant]).map(item => item.component)
    },
    getSplitVariants: () => {
      const visibleComponent = config[defaultVariant].component
      const hiddenComponents = values
        .filter(item => item !== config[defaultVariant])
        .map(item => item.component)
      return [visibleComponent, hiddenComponents] as const
    },
  }
}

// #region @example

const Component0 = () => <></>
const VARIANTS0 = createVariantsFactoryStrict(
  {
    'component-01': { component: Component0 },
    'component-02': { component: Component0 },
    'component-03': { component: Component0 },
  } as const,
  'component-01' as const
)

type Component2Props = { title: string }
const Component2: React.FC<Component2Props> = ({ title }) => <>{title}</>
type VariantsKey = 'component-11' | 'component-12' | 'component-13'
const VARIANTS = createVariantsFactoryStrict<VariantsKey, Component2Props>(
  {
    'component-11': { component: Component2 },
    'component-12': { component: Component2 },
    'component-13': { component: Component2 },
  } as const satisfies FactoryVariantObject<VariantsKey, Component2Props>,
  'component-11' as const
)

const otherVarints = VARIANTS.getOtherVarints()
export const ThemeRadioGroupVariants: React.FC<Component2Props> = props => {
  return otherVarints.map((Component, i) => <Component key={i} {...props} />)
}

// #endregion

// #region old

// const createVariantsFactory = <
//   P,
//   T extends Record<string, { variant: React.ComponentType<P> }> = Record<
//     string,
//     { variant: React.ComponentType<P> }
//   >,
// >(
//   config: T // T & { readonly [K in keyof T]: Readonly<T[K]> }
// ) => {
//   const keys = Object.keys(config) as Array<keyof T> // Readonly<Array<keyof T>>
//   const values = Object.values(config)
//   // const variant = Object.values(config).map(v => v.variant)

//   return {
//     // Данные
//     map: config,
//     keys,
//     // values,
//     // variant,

//     // Методы
//     splitVisibilityVariants: (key: keyof T) => {
//       const visibleComponent = config[key].variant
//       const hiddenComponents = values.filter(item => item !== config[key])
//       return [visibleComponent, hiddenComponents] as const
//     },
//     getVisibleVariant: (key: keyof T) => config[key].variant,
//     getHiddenVariants: (key: keyof T) => {
//       return values.filter(item => item !== config[key])
//     },

//     // getVariant: (key: keyof T) => config[key].variant,
//     // hasKey: (key: string) => key in config,
//     // getKeys: () => keys,
//     // findByVariant: (variant: React.ComponentType) =>
//     //   keys.find(key => config[key].variant === variant),
//   }
// }

// #endregion

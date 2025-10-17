// src/react-dev/shared/libs/theme/ui/variants-factory/variants-factory-infer.tsx

// ⚠️ - any: чтобы фабика принимала любые React компоненты с любыми пропсами, но при этом автоматически выводила их типы.

export function createVariantsFactoryInfer<
  T extends Record<string, { component: React.ComponentType<any> }>,
>(config: T, defaultVariant: keyof T) {
  // Автоматически выводим пропсы из всех компонентов
  type Props = T[keyof T]['component'] extends React.ComponentType<infer P> ? P : never

  const keys = Object.keys(config) as Array<keyof T>
  const values = Object.values(config)
  const components = Object.values(config).map(v => v.component) as Array<
    React.ComponentType<Props>
  >

  return {
    // Данные
    map: config,
    keys,
    values,

    components,
    defaultVariant,

    // Методы
    splitVisibilityComponent: <K extends keyof T>(key: K) => {
      const visibleComponent: T[K]['component'] = config[key].component
      const hiddenComponents = values
        .filter(item => item !== config[key])
        .map(item => item.component) as Array<React.ComponentType<Props>>
      return [visibleComponent, hiddenComponents] as const
    },

    getVisibleComponent: <K extends keyof T>(key: K): T[K]['component'] => config[key].component,
    getHiddenComponents: (key: keyof T) => {
      return values.filter(item => item !== config[key]).map(item => item.component) as Array<
        React.ComponentType<Props>
      >
    },
  } as const
}

// #region @example

type Component13Props = { title: string }
const Component1: React.FC<Component13Props> = ({ title }) => <div>{title}</div>
// const Component2: React.FC<Component13Props> = ({ title }) => <div>{title}</div>
// const Component3: React.FC<Component13Props> = ({ title }) => <div>{title}</div>

// // ⚠️ - Генерик не передаем! any автоматически выводит тип!
// const VARIANTS = createVariantsFactory({
//   'component-1': { component: Component1 },
//   'component-2': { component: Component2 },
//   'component-3': { component: Component3 },
// } as const)

// /* ✅ */ const variants2Keys = VARIANTS.keys
// /* ✅ */ const variants2Components = VARIANTS.components.map((Component, i) => (
//   <Component title='' key={i} />
// ))
// /* ✅ */ const variants2GetVisibleComponent = VARIANTS.getVisibleComponent('component-1')
// /* ✅ */ const variants2GetHiddenComponents = VARIANTS.getHiddenComponents('component-1').map(
//   (Component, i) => <Component title='' key={i} />
// )
// /* ✅ */ const [visibleComponent, hiddenComponents] =
//   VARIANTS.splitVisibilityComponent('component-1')

// 🔮 - МАГИЯ?!

type Component4Props = { label: string }
const ComponentWithoutProps = () => <span>'component-without-props'</span>
const Component4: React.FC<Component4Props> = ({ label }) => <div>{label}</div>

// ⚠️ - Генерик не передаем! any автоматически выводит тип!
const VARIANTS2 = createVariantsFactoryInfer(
  {
    'component-1': { component: Component1 }, // Component13Props ✅
    'component-without-props': { component: ComponentWithoutProps }, // () => JSX.Element ✅
    'component-4': { component: Component4 }, // Component4Props ✅
  } as const,
  'component-1'
)

/* ❌
  При использовании infer P в контексте T[keyof T]['component'] TypeScript объединяет все возможные типы пропсов через пересечение (&), а не через объединение (|).
  Это создаёт иллюзию типобезопасности: компилятор не ругается, когда вы передаёте title и label всем компонентам, но на самом деле: 
    - ComponentWithoutProps получает лишние пропсы (что в React допустимо, но нежелательно),
    - А если бы один из компонентов имел обязательный пропс, которого нет у других, вы не смогли бы удовлетворить все требования одновременно — и тогда пришлось бы использовать any, @ts-ignore или касты.
*/

// #endregion

// const renderVariant = (key: keyof typeof VARIANTS2.map) => {
//   const Comp = VARIANTS2.map[key].component;
//   // Здесь вы знаете, какой компонент — и можете передать нужные пропсы
//   if (key === 'component-1') return <Comp title="..." />;
//   if (key === 'component-4') return <Comp label="..." />;
//   return <Comp />;
// };

// type VariantItem =
//   | { type: 'component-1'; props: Component13Props }
//   | { type: 'component-4'; props: Component4Props }
//   | { type: 'component-without-props'; props: {} };

// const renderVariant = (item: VariantItem) => {
//   switch (item.type) {
//     case 'component-1': return <Component1 {...item.props} />;
//     case 'component-4': return <Component4 {...item.props} />;
//     case 'component-without-props': return <ComponentWithoutProps />;
//   }
// };

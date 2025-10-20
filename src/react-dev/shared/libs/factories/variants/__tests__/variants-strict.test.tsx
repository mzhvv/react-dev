import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

import type { FactoryVariantConfig } from '../variants'
import { createVariantsFactory } from '../variants'

//
type Variant = 'variant-1' | 'variant-2' | 'variant-3'

// Тестовые компоненты
const ComponentWithoutProps = () => <div data-testid='component-without-props'>No Props</div>

type ComponentWithProps = { value: string }
const ComponentWithProps: React.FC<ComponentWithProps> = ({ value }) => (
  <div data-testid='component-with-props' data-value={value}>
    {value}
  </div>
)

describe('createVariantsFactoryStrict', () => {
  describe('factory with components without props', () => {
    // Мок-фабрика
    const config = {
      'variant-1': { component: ComponentWithoutProps },
      'variant-2': { component: ComponentWithoutProps },
      'variant-3': { component: ComponentWithoutProps },
    } as const // satisfies FactoryVariantConfig<Variant, {}>
    const factory = createVariantsFactory(config, 'variant-1')

    // Данные
    it('should have correct data structure', () => {
      expect(factory.map).toEqual(config)
      expect(factory.keys).toHaveLength(3)
      expect(factory.values).toHaveLength(3)
      expect(factory.components).toHaveLength(3)
    })

    // Методы
    // it('', () => {})
  })

  describe('factory with components with props', () => {
    // Мок-фабрика
    const config = {
      'variant-1': { component: ComponentWithProps },
      'variant-2': { component: ComponentWithProps },
      'variant-3': { component: ComponentWithProps },
    } as const satisfies FactoryVariantConfig<Variant, ComponentWithProps>
    const factory = createVariantsFactory<Variant, ComponentWithProps>(config, 'variant-1')

    // Данные
    it('should have correct data structure', () => {
      expect(factory.map).toEqual(config)
      expect(factory.keys).toEqual(['variant-1', 'variant-2', 'variant-3'])
      expect(factory.values).toEqual([
        { component: ComponentWithProps },
        { component: ComponentWithProps },
        { component: ComponentWithProps },
      ])
      expect(factory.components).toEqual([
        ComponentWithProps,
        ComponentWithProps,
        ComponentWithProps,
      ])
    })

    // Методы
    it('getDefaultVariant', () => {
      const DefaultVariant = factory.getDefaultVariant()
      expect(DefaultVariant).toBe(ComponentWithProps)

      const rendered = render(<DefaultVariant value='value' />)

      // 1. Если getByTestId не выбросил ошибку - элемент уже отрендерилися в DOM
      const element = rendered.getByTestId('component-with-props')

      // 2. Проверка атрибутов - на DOM элементе
      expect(element).toHaveAttribute('data-value')

      // // 3. Проверка текстового содержимого
      // expect(element).toHaveTextContent('value')
    })

    it('getAdditionalVariants', () => {
      const additionalVariants = factory.getAdditionalVariants()
      expect(additionalVariants).toHaveLength(2)

      const renderedComponents = additionalVariants.map((Component, index) => {
        const container = document.createElement('div')
        return render(<Component value='value' key={index} />, { container })
      })

      renderedComponents.forEach(rendered => {
        // 1. Если getByTestId не выбросил ошибку - элемент уже отрендерилися в DOM
        const element = rendered.getByTestId('component-with-props')

        // 2. Проверка атрибутов - на DOM элементе
        expect(element).toHaveAttribute('data-value')

        // // 3. Проверка текстового содержимого
        // expect(element).toHaveTextContent('value')
      })
    })

    it('getSplitVariants', () => {
      const [DefaultVariant, additionalVariants] = factory.getSplitVariants()
      expect(DefaultVariant).toBe(ComponentWithProps)
      expect(additionalVariants).toHaveLength(2)

      // Логика Идентична getDefaultVariant и getAdditionalVariants
    })
  })
})

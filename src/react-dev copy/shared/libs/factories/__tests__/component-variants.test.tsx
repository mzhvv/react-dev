// src/react-dev/shared/libs/factories/__tests__/component-variants.test.tsx

import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

import type { FactoryComponentVariantsConfig } from '../component-variants'
import { createComponentVariantsFactory } from '../component-variants'

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

describe('createComponentVariantsFactory', () => {
  describe('Фабрика с вариантами компонентов без пропсов', () => {
    // Мок-фабрика
    const config = {
      'variant-1': { component: ComponentWithoutProps },
      'variant-2': { component: ComponentWithoutProps },
      'variant-3': { component: ComponentWithoutProps },
    } as const // satisfies FactoryComponentVariantsConfig<Variant, {}>
    const factory = createComponentVariantsFactory(config, 'variant-1')

    // Данные
    it('должны корректно инициализировать данные фабрики', () => {
      expect(factory.map).toEqual(config)
      expect(factory.keys).toHaveLength(3)
      expect(factory.values).toHaveLength(3)
      expect(factory.components).toHaveLength(3)
    })

    // Методы
    // it('', () => {})
  })

  describe('Фабрика с вариантами компонентов с пропсами', () => {
    // Мок-фабрика
    const config = {
      'variant-1': { component: ComponentWithProps },
      'variant-2': { component: ComponentWithProps },
      'variant-3': { component: ComponentWithProps },
    } as const satisfies FactoryComponentVariantsConfig<Variant, ComponentWithProps>
    const factory = createComponentVariantsFactory<Variant, ComponentWithProps>(config, 'variant-1')

    // Данные
    it('должны корректно инициализировать данные фабрики', () => {
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
    it('должен возвращать компонент по умолчанию', () => {
      const DefaultComponent = factory.getDefaultComponent()
      expect(DefaultComponent).toBe(ComponentWithProps)

      const rendered = render(<DefaultComponent value='value' />)

      // 1. Если getByTestId не выбросил ошибку - элемент уже отрендерилися в DOM
      const element = rendered.getByTestId('component-with-props')

      // 2. Проверка атрибутов - на DOM элементе
      expect(element).toHaveAttribute('data-value')

      // // 3. Проверка текстового содержимого
      // expect(element).toHaveTextContent('value')
    })

    it('должен возвращать массив всех компонентов, кроме компонента по умолчанию', () => {
      const nonDefaultComponents = factory.getNonDefaultComponents()
      expect(nonDefaultComponents).toHaveLength(2)

      const renderedComponents = nonDefaultComponents.map((Component, index) => {
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

    it('возвращает кортеж [компонент по умолчанию, массив остальных компонентов]', () => {
      const [DefaultComponent, nonDefaultComponents] = factory.getComponentGroups()
      expect(DefaultComponent).toBe(ComponentWithProps)
      expect(nonDefaultComponents).toHaveLength(2)

      // Логика Идентична getDefaultComponent и getNonDefaultComponents
    })
  })
})

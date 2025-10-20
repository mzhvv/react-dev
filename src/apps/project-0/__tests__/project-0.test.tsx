import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Project0Page } from '../page'
import { routesPproject0 } from '../router'
import { navigationPproject0 } from '../navigation'

describe('Project0', () => {
  describe('Project0Page', () => {
    it('should render the page with correct title', () => {
      render(<Project0Page />)

      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('project-0')
    })

    it('should have correct structure', () => {
      render(<Project0Page />)

      const main = screen.getByRole('main')
      expect(main).toBeInTheDocument()

      const header = main.querySelector('header')
      expect(header).toBeInTheDocument()
      expect(header).toHaveClass('pt-4')
    })
  })

  describe('Routes', () => {
    it('should have correct route configuration', () => {
      expect(routesPproject0).toHaveLength(1)

      const route = routesPproject0[0]
      expect(route.path).toBe('project-0')
      expect(route.element).toBeDefined()
    })

    it('should have valid route structure', () => {
      const route = routesPproject0[0]

      // Проверяем, что элемент является React компонентом
      expect(route.element).toBeDefined()
      expect(typeof route.element).toBe('object')
    })
  })

  describe('Navigation', () => {
    it('should have correct navigation configuration', () => {
      expect(navigationPproject0).toHaveLength(1)

      const navItem = navigationPproject0[0]
      expect(navItem.path).toBe('/project-0')
      expect(navItem.title).toBe('project-0')
    })

    it('should have valid navigation structure', () => {
      const navItem = navigationPproject0[0]

      expect(navItem).toHaveProperty('path')
      expect(navItem).toHaveProperty('title')
      expect(typeof navItem.path).toBe('string')
      expect(typeof navItem.title).toBe('string')
    })
  })

  describe('Integration', () => {
    it('should have consistent path between routes and navigation', () => {
      const routePath = routesPproject0[0].path
      const navPath = navigationPproject0[0].path

      // Путь в навигации должен соответствовать пути в роутах
      expect(navPath).toBe(`/${routePath}`)
    })

    it('should have consistent title between page and navigation', () => {
      render(<Project0Page />)
      const pageTitle = screen.getByRole('heading', { level: 1 }).textContent
      const navTitle = navigationPproject0[0].title

      expect(pageTitle).toBe(navTitle)
    })
  })
})

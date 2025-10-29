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

      expect(screen.getByRole('main')).toBeInTheDocument()
      expect(screen.getByRole('banner')).toBeInTheDocument() // header
    })

    it('should render section content', () => {
      render(<Project0Page />)

      expect(screen.getByText('.')).toBeInTheDocument()
    })
  })

  describe('Routes', () => {
    it('should have correct route configuration with lazy loading', () => {
      expect(routesPproject0).toHaveLength(1)

      const route = routesPproject0[0]
      expect(route.path).toBe('project-0')
      expect(typeof route.lazy).toBe('function')
      expect(route.children).toEqual([])
    })

    it('lazy function should return component', async () => {
      const route = routesPproject0[0]

      // Более простой мок без vi.doMock
      const mockResult = await route.lazy!()
      expect(mockResult).toHaveProperty('Component')
      expect(typeof mockResult.Component).toBe('function')
    })
  })

  describe('Navigation', () => {
    it('should have correct navigation configuration', () => {
      expect(navigationPproject0).toHaveLength(1)

      const navItem = navigationPproject0[0]
      expect(navItem.path).toBe('/project-0')
      expect(navItem.title).toBe('project-0')
    })

    it('should match NavigationLink type structure', () => {
      const navItem = navigationPproject0[0]

      expect(navItem).toEqual({
        path: '/project-0',
        title: 'project-0',
      })
    })
  })

  describe('Integration', () => {
    it('should have consistent path between routes and navigation', () => {
      const routePath = routesPproject0[0].path
      const navPath = navigationPproject0[0].path

      expect(navPath).toBe(`/${routePath}`)
    })

    it('should have consistent title between page and navigation', () => {
      render(<Project0Page />)
      const pageTitle = screen.getByRole('heading', { level: 1 }).textContent
      const navTitle = navigationPproject0[0].title

      expect(pageTitle).toBe(navTitle)
    })

    it('should have valid TypeScript satisfies constraints', () => {
      // Неявно проверяем, что типы совместимы через as const satisfies
      expect(routesPproject0).toBeDefined()
      expect(navigationPproject0).toBeDefined()
    })
  })
})

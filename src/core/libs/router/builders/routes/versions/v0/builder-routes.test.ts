// src/core/libs/router/builders/routes/versions/v0/builder-routes.test.ts

// describe('routesBuilder.v0', () => {
//   // #region Сравнение с hardcoded
//   describe('integration with example mock data', () => {
//     it('должен преобразовать routesConfig в структуру идентичную hardcodedRoutes', () => {
//       // Полная проверка структуры
//       expect(routes).toEqual(hardcodedRoutes)

//       // Проверка что это объект, а не массив
//       expect(Array.isArray(routes)).toBe(false)
//       expect(typeof routes).toBe('object')

//       // Проверка JSON сериализации
//       expect(JSON.stringify(routes)).toBe(JSON.stringify(hardcodedRoutes))
//     })
//   })
//   // #endregion
// })

// #region

// // ============ ТЕСТ 2: Корневой провайдер ============
// describe('root provider', () => {
//   it('должен иметь path: undefined у корневого провайдера', () => {
//     expect(routes.path).toBeUndefined()
//   })

//   it('должен иметь children массив', () => {
//     expect(Array.isArray(routes.children)).toBe(true)
//     expect(routes.children?.length).toBe(1)
//   })
// })

// // ============ ТЕСТ 3: Главное приложение ============
// describe('main app - exampleCoreLibsRouterTypesDefault', () => {
//   const mainApp = routes.children?.[0]

//   it('должен иметь правильный path', () => {
//     expect(mainApp?.path).toBe('example-core-libs-router-types-default')
//   })

//   it('должен иметь 4 children (index + 3 домена)', () => {
//     expect(mainApp?.children?.length).toBe(4)
//   })

//   it('должен содержать index route первым', () => {
//     expect(mainApp?.children?.[0]).toEqual({ index: true })
//   })
// })

// // ============ ТЕСТ 4: Паттерн Index как fallback ============
// describe('pattern 1 - Index as fallback', () => {
//   const mainApp = routes.children?.[0]
//   const domain1 = mainApp?.children?.[1]

//   it('domain1 должен иметь path: "domain-1"', () => {
//     expect(domain1?.path).toBe('domain-1')
//   })

//   it('domain1 должен иметь index route как fallback', () => {
//     expect(domain1?.children?.[0]).toEqual({ index: true })
//     expect(domain1?.children?.length).toBe(1)
//   })
// })

// // ============ ТЕСТ 5: Паттерн First-child как fallback ============
// describe('pattern 2 - First-child as fallback', () => {
//   const mainApp = routes.children?.[0]
//   const domain2 = mainApp?.children?.[2]

//   it('domain2 должен иметь path: undefined', () => {
//     expect(domain2?.path).toBeUndefined()
//   })

//   it('domain2 должен иметь first-child как fallback', () => {
//     expect(domain2?.children?.[0]).toEqual({ path: 'domain-2' })
//     expect(domain2?.children?.length).toBe(1)
//   })
// })

// // ============ ТЕСТ 6: Вложенность и глубокая структура ============
// describe('pattern 3 - Deep nesting', () => {
//   const mainApp = routes.children?.[0]
//   const domain3 = mainApp?.children?.[3]

//   it('domain3 должен иметь path: "domain-3"', () => {
//     expect(domain3?.path).toBe('domain-3')
//   })

//   it('domain3 должен иметь index route', () => {
//     expect(domain3?.children?.[0]).toEqual({ index: true })
//   })

//   describe('domain3Segment1', () => {
//     const segment1 = domain3?.children?.[1]

//     it('должен иметь path: "domain-3-segment-1"', () => {
//       expect(segment1?.path).toBe('domain-3-segment-1')
//     })

//     it('должен иметь index route', () => {
//       expect(segment1?.children?.[0]).toEqual({ index: true })
//     })

//     it('должен иметь page route', () => {
//       expect(segment1?.children?.[1]).toEqual({
//         path: 'domain-3-segment-1-page-1',
//         children: undefined,
//       })
//     })
//   })

//   describe('domain3Segment2', () => {
//     const segment2 = domain3?.children?.[2]

//     it('должен иметь path: undefined (first-child fallback pattern)', () => {
//       expect(segment2?.path).toBeUndefined()
//     })

//     it('должен иметь first-child как fallback', () => {
//       expect(segment2?.children?.[0]).toEqual({
//         path: 'domain-3-segment-2',
//         children: undefined,
//       })
//     })

//     it('должен иметь второй page route', () => {
//       expect(segment2?.children?.[1]).toEqual({
//         path: 'domain-3-segment-2-page-1',
//         children: undefined,
//       })
//     })
//   })
// })

// // ============ ТЕСТ 7: Сравнение всех путей ============
// describe('path validation', () => {
//   it('все пути должны быть в kebab-case', () => {
//     const extractPaths = (route: RouteObject): string[] => {
//       const paths: string[] = []
//       if (route.path && typeof route.path === 'string') {
//         paths.push(route.path)
//       }
//       if (route.children) {
//         route.children.forEach((child: RouteObject) => {
//           paths.push(...extractPaths(child))
//         })
//       }
//       return paths
//     }

//     const routesPaths = extractPaths(routes)
//     const hardcodedPaths = extractPaths(hardcodedRoutes)

//     // Проверяем что все пути совпадают
//     expect(routesPaths.sort()).toEqual(hardcodedPaths.sort())

//     // Проверяем kebab-case (буквы и дефисы)
//     routesPaths.forEach(path => {
//       expect(path).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
//     })
//   })
// })

// // ============ ТЕСТ 8: Тестирование отдельных случаев ============
// describe('edge cases', () => {
//   it('обрабатывает конфиг с одним app', () => {
//     const singleAppConfig: RoutesConfig = {
//       provider: {
//         path: undefined,
//         children: {
//           singleApp: {
//             path: 'single',
//             element: 'div',
//             children: {
//               index: { index: true, element: 'span' },
//             },
//           },
//         },
//       },
//     }

//     const result = routesBuilder.v0(singleAppConfig)

//     expect(result.path).toBeUndefined()
//     expect(result.children?.length).toBe(1)
//     expect(result.children?.[0].path).toBe('single')
//     expect(result.children?.[0].children?.[0]).toEqual({ index: true, element: 'span' })
//   })

//   it('обрабатывает конфиг с несколькими apps', () => {
//     const multiAppConfig: RoutesConfig = {
//       provider: {
//         path: undefined,
//         children: {
//           app1: { path: 'app-1', element: 'div1' },
//           app2: { path: 'app-2', element: 'div2' },
//         },
//       },
//     }

//     const result = routesBuilder.v0(multiAppConfig)

//     expect(result.children?.length).toBe(2)
//     expect(result.children?.[0].path).toBe('app-1')
//     expect(result.children?.[1].path).toBe('app-2')
//   })

//   it('обрабатывает конфиг без children у провайдера', () => {
//     const noChildrenConfig: RoutesConfig = {
//       provider: {
//         path: '/root',
//         element: 'div',
//       },
//     }

//     const result = routesBuilder.v0(noChildrenConfig)

//     expect(result.path).toBe('/root')
//     expect(result.element).toBe('div')
//     expect(result.children).toBeUndefined()
//   })

//   it('использует ключ как fallback path', () => {
//     const fallbackPathConfig: RoutesConfig = {
//       rootProvider: {
//         element: 'div',
//         children: {
//           app: { path: 'app', element: 'span' },
//         },
//       },
//     }

//     const result = routesBuilder.v0(fallbackPathConfig)

//     expect(result.path).toBe('rootProvider')
//     expect(result.element).toBe('div')
//   })
// })

// // ============ ТЕСТ 9: Type Safety тесты ============
// describe('type safety', () => {
//   it('сохраняет структуру RouteObject', () => {
//     // Проверка что routes соответствует интерфейсу RouteObject
//     const validateRouteObject = (route: RouteObject): boolean => {
//       return (
//         typeof route === 'object' &&
//         route !== null &&
//         (route.index === undefined || typeof route.index === 'boolean') &&
//         (route.path === undefined || typeof route.path === 'string') &&
//         (route.children === undefined || Array.isArray(route.children))
//       )
//     }

//     expect(validateRouteObject(routes)).toBe(true)

//     if (routes.children) {
//       routes.children.forEach((child: RouteObject) => {
//         expect(validateRouteObject(child)).toBe(true)
//       })
//     }
//   })

//   it('routes и hardcodedRoutes имеют одинаковую структуру', () => {
//     const getKeys = (obj: RouteObject): string[] => {
//       return Object.keys(obj).filter(
//         (key): key is keyof RouteObject => obj[key as keyof RouteObject] !== undefined
//       )
//     }

//     expect(getKeys(routes)).toEqual(getKeys(hardcodedRoutes))
//   })
// })

// // ============ ТЕСТ 10: Производительность трансформации ============
// describe('performance', () => {
//   it('быстро трансформирует конфиг', () => {
//     const start = performance.now()
//     const result = routesBuilder.v0(routesConfig)
//     const end = performance.now()

//     expect(end - start).toBeLessThan(50) // меньше 50мс
//     expect(result).toBeDefined()
//   })
// })

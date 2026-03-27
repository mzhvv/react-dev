// src/apps/home/index.ts

import type { LinkObject } from '@mzhvv/libs/routers/react-router/navigation'

import { route } from './app/route'

export const homeDataConfig = {
  route,
  navigation: {
    domain: {
      relativePath: '/',
      absolutePath: '/',
      constKey: 'root',
    } as const satisfies LinkObject<string>, // Создавать отдельную функцию для root - избыточно, а проверять каждый объект `path === '/'` в createLinkObject - дорого
  },
}

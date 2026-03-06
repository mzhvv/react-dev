// src/apps/__accumulator__/route.ts

import type { RouteObject } from 'react-router'
import { homeRoute } from '@apps/home'
import { examplesRoute } from '@apps/@mzhvv/examples'

export const appsRoute = [homeRoute, examplesRoute] as const satisfies RouteObject[]

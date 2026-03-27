// src/core/configs/framework/dataConfig/navigation/types.ts

// ...types/sections

export type NavigationSectionId = 'projects' | 'development'

// ...types/constants

type ConstantSectionSystemData = {}
type ConstantSectionMetaData = { title: string }
type ConstantSectionObject = ConstantSectionSystemData & ConstantSectionMetaData

export type ConstantSectionMap = Record<NavigationSectionId, ConstantSectionObject>

import { DeepPartial } from '@reduxjs/toolkit'

export interface AttributeSet {
  id: string
  name: string
  type: AttributeType
  items: Attribute[]
}
export type PartialAttributeSet<T extends DeepPartial<AttributeSet>> = T
export type PartialAttribute<T extends Partial<Attribute>> = T

export type AttributeType = 'text' | 'swatch'

export interface Attribute {
  id: string
  value: string
  displayValue: string
}

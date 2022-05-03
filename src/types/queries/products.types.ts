import { DeepPartial } from '@reduxjs/toolkit'
import { AttributeSet } from '../attribute-set.types'
import { Price } from '../price.types'

export interface Product {
  id: string
  name: string
  inStock: boolean
  gallery: string[]
  description: string
  category: string
  attributes: AttributeSet[]
  prices: Price[]
  brand: string
}

export type PartialProduct<T extends DeepPartial<Product>> = T

export interface SelectedAttribute {
  attributeSetId: string
  attributeId: string
}

export interface InCartProduct {
  cartItemId: string
  productId: string
  count: number
  selectedAttributes: SelectedAttribute[]
  prices: Price[]
}

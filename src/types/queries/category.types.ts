import { DeepPartial } from '@reduxjs/toolkit'
import { Product } from 'types/queries/products.types'

export interface Category {
  name: string
  products: Product[]
}

export type PartialCategory<T extends DeepPartial<Category>> = T
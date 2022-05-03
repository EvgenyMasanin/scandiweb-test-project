import { PartialAttribute } from './../../types/attribute-set.types'
import { gql } from '@apollo/client'
import { ChildDataProps } from '@apollo/client/react/hoc'
import { Price, PartialProduct, PartialAttributeSet } from 'types'

export const ProductsPreviewQuery = gql`
  query ProductsPreviewQuery($title: String!) {
    category(input: { title: $title }) {
      products {
        id
        name
        inStock
        gallery
        brand
        attributes {
          id
          items {
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`

export type ProductPreview = PartialProduct<{
  id: string
  name: string
  brand: string
  inStock: boolean
  gallery: string[]
  prices: Price[]
  attributes: ProductPreviewAttributes
}>

export type ProductPreviewAttributes = PartialAttributeSet<{
  id: string
  items: PartialAttribute<{ id: string }>[]
}>[]

export interface ProductsPreviewQueryVariables {
  title: string
}

export interface ProductsPreviewQueryData {
  category: {
    products: ProductPreview[]
  }
}

export type ChildProps<InputProps extends ProductsPreviewQueryVariables> = ChildDataProps<
  InputProps,
  ProductsPreviewQueryData,
  ProductsPreviewQueryVariables
>

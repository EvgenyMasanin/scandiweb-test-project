import { gql } from '@apollo/client'
import { ChildDataProps } from '@apollo/client/react/hoc'
import { Product } from 'types'

export const ProductQuery = gql`
  query ProductQuery($productId: String!) {
    product(id: $productId) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
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
      brand
    }
  }
`

export interface ProductQueryVariables {
  productId: string
}

export interface ProductQueryData {
  product: Product
}

export type ChildProps<InputProps extends ProductQueryVariables> = ChildDataProps<
  InputProps,
  ProductQueryData,
  ProductQueryVariables
>

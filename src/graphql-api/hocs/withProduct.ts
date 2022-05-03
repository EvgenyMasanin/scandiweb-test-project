import { graphql } from '@apollo/client/react/hoc'
import {
  ChildProps,
  ProductQuery,
  ProductQueryData,
  ProductQueryVariables,
} from 'graphql-api/queries/product.gql'
import { ComponentType } from 'react'

export const withProduct = <InputProps extends ProductQueryVariables>(
  component: ComponentType<InputProps & ChildProps<InputProps>>
) =>
  graphql<InputProps, ProductQueryData, ProductQueryVariables, ChildProps<InputProps>>(
    ProductQuery,
    {
      options: ({ productId }) => ({ variables: { productId } }),
    }
  )(component)

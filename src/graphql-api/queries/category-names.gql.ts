import { gql } from '@apollo/client'
import { PartialCategory } from 'types/queries/category.types'

export const CategoryNamesQuery = gql`
  query CategoryNamesQuery {
    categories {
      name
    }
  }
`

export type CategoryNames = PartialCategory<{
  name: string
}>

export interface CategoryNamesQueryData {
  categories: CategoryNames[]
}

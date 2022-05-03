import { graphql } from '@apollo/client/react/hoc'
import { CategoryNamesQuery, CategoryNamesQueryData } from 'graphql-api/queries'
import { GQLDataProp } from 'types/queries/gql-data-prop.types'

const NAME = 'categoryNamesData'

export const withCategoryNames = graphql<unknown, CategoryNamesQueryData>(CategoryNamesQuery, {
  name: NAME,
})

export interface WithCategoryNamesData {
  [NAME]: GQLDataProp<CategoryNamesQueryData>
}

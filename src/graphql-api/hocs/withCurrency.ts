import { graphql } from '@apollo/client/react/hoc'
import { CurrenciesQuery, CurrenciesQueryData } from 'graphql-api/queries/currencies.gql'
import { GQLDataProp } from 'types/queries/gql-data-prop.types'

const NAME = 'currenciesData'

export const withCurrencies = graphql<unknown, CurrenciesQueryData>(CurrenciesQuery, {
  name: NAME,
})

export interface WithCurrenciesData {
  [NAME]: GQLDataProp<CurrenciesQueryData>
}

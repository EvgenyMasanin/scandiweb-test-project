import { gql } from '@apollo/client'
import { Currency } from 'types'

export const CurrenciesQuery = gql`
  query CurrenciesQuery {
    currencies {
      label
      symbol
    }
  }
`

export interface CurrenciesQueryData {
  currencies: Currency[]
}

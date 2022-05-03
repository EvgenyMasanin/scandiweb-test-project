import { Currency } from './queries/currency.types'

export interface Price {
  currency: Currency
  amount: number
}

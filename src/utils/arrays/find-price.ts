import { Currency, Price } from 'types'

export const findPrice = (prices: Price[], currency: Currency) =>
  prices.find(({ currency: { label } }) => label === currency?.label)

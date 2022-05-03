import { Currency, InCartProduct } from 'types'

export const getTotal = (inCartProducts: InCartProduct[], currency: Currency) =>
  Number(
    inCartProducts
      .reduce((total, { prices, count }) => {
        const amount = prices.find(({ currency: c }) => c.label === currency?.label).amount
        return total + amount * count
      }, 0)
      .toFixed(2)
  )

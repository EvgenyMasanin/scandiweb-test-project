import { RootState } from 'redux-store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Currency } from 'types'

interface CurrencyState {
  currencies: Currency[]
  currency: Currency
}

const initialState: CurrencyState = {
  currencies: [],
  currency: null,
}

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrency: (state, { payload }: PayloadAction<Currency>) => {
      state.currency = payload
    },
    setCurrencies: (state, { payload }: PayloadAction<Currency[]>) => {
      state.currencies = payload
      state.currency = payload[0]
    },
  },
})

export const { changeCurrency, setCurrencies } = currencySlice.actions

export default currencySlice

export const selectCurrency = (state: RootState) => state.currency.currency
export const selectCurrencies = (state: RootState) => state.currency.currencies

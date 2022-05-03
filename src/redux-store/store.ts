import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducers/cart.slice'
import categoriesSlice from './reducers/categories.slice'
import currencySlice from './reducers/currency.slice'

const rootReducer = combineReducers({
  [categoriesSlice.name]: categoriesSlice.reducer,
  [currencySlice.name]: currencySlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

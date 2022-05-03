import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'redux-store/store'

interface CategoriesState {
  categoryNames: string[]

  category: string
}

const initialState: CategoriesState = {
  categoryNames: [],
  category: '',
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoryNames: (state, { payload }: PayloadAction<string[]>) => {
      state.categoryNames = payload
    },

    setCategory: (state, { payload }: PayloadAction<string>) => {
      state.category = payload
    },
  },
})

export const { setCategoryNames, setCategory } = categoriesSlice.actions

export default categoriesSlice

export const selectCategoryNames = (state: RootState) => state.categories.categoryNames
export const selectCategory = (state: RootState) => state.categories.category

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './../store'
import { isProductInCart } from 'utils/cart/is-product-in-cart'
import { InCartProduct, SelectedAttribute } from 'types'
import { generateId } from 'utils/strings/generate-id'
import { toSnakeCase } from 'utils/strings/to-snake_case'

interface CartState {
  products: InCartProduct[]
}

const initialState: CartState = {
  products: [],
}

export type SendToCartPayload = Omit<InCartProduct, 'count' | 'cartItemId'>

export interface ChangeAttributePayload extends SelectedAttribute {
  cartItemId: string
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    sendToCart: (state, { payload }: PayloadAction<SendToCartPayload>) => {
      const { productId, selectedAttributes } = payload

      if (isProductInCart(state.products, { id: productId, selectedAttributes })) return

      const baseId = `${productId}-${selectedAttributes
        .map(({ attributeId, attributeSetId }) => toSnakeCase(`${attributeId}-${attributeSetId}`))
        .join('-')}`

      state.products.push({ ...payload, count: 1, cartItemId: generateId(baseId) })
    },

    changeAttribute: (state, { payload }: PayloadAction<ChangeAttributePayload>) => {
      const product = state.products.find(({ cartItemId }) => cartItemId === payload.cartItemId)
      const attributeSet = product?.selectedAttributes.find(
        ({ attributeSetId }) => attributeSetId === payload.attributeSetId
      )

      if (!attributeSet) return

      attributeSet.attributeId = payload.attributeId
    },

    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      state.products = state.products.filter(product => product.productId !== payload)
    },

    addProduct: (state, { payload }: PayloadAction<string>) => {
      state.products.find(product => product.cartItemId === payload).count++
    },

    removeProduct: (state, { payload }: PayloadAction<string>) => {
      const product = state.products.find(product => product.cartItemId === payload)

      if (product.count === 1) {
        state.products = state.products.filter(product => product.cartItemId !== payload)
        return
      }

      product.count--
    },
  },
})

export const { sendToCart, addProduct, removeFromCart, removeProduct, changeAttribute } =
  cartSlice.actions

export const selectProducts = (state: RootState) => state.cart.products

export const selectProductsCount = (state: RootState) =>
  state.cart.products.reduce((acc, product) => {
    return acc + product.count
  }, 0)

export default cartSlice

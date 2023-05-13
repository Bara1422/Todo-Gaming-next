import { createSlice } from '@reduxjs/toolkit'
import { addItemToCart, removeItemsToCart } from './cartUtils'

const initialState = {
  hidden: false,
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: () => initialState,
    cartHidden: (state) => {
      state.hidden = !state.hidden
    },
    addCartItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload)
    },
    removeCartItem: (state, action) => {
      state.cartItems = removeItemsToCart(state.cartItems, action.payload)
    }
  }
})

export const { reset, cartHidden, addCartItem, removeCartItem } =
  cartSlice.actions

export default cartSlice.reducer

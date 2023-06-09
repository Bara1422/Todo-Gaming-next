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
    resetCart: () => initialState,
    cartHidden: (state) => {
      state.hidden = false
    },
    toggleCartHidden: (state) => {
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

export const {
  resetCart,
  cartHidden,
  toggleCartHidden,
  addCartItem,
  removeCartItem
} = cartSlice.actions

export default cartSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hidden: false,
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: () => initialState,
    cartHidden(s)
  }
})

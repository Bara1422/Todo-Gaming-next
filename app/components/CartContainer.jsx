'use client'

import React from 'react'
import { CartIcon } from '../Icons/CartIcon'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '@/app/redux/features/cartSlice'

const CartContainer = () => {
  const dispatch = useDispatch()

  const quantity = useSelector((state) =>
    state.cart.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity
    }, 0)
  )
  const handleToggle = () => {
    dispatch(toggleCartHidden())
  }

  return (
    <div
      className='flex flex-col items-center cursor-pointer'
      onClick={handleToggle}
    >
      <CartIcon />
      <span className='text-xs font-bold'>{quantity}</span>
    </div>
  )
}

export default CartContainer

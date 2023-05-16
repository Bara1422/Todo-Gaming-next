'use client'

import React, { useCallback } from 'react'
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

  const handleToggleCartHidden = useCallback(() => {
    dispatch(toggleCartHidden())
  }, [dispatch])

  return (
    <div
      className='flex flex-col items-center cursor-pointer hover:text-amethyst-600'
      onClick={handleToggleCartHidden}
    >
      <CartIcon />
      <span className='text-xs font-bold'>{quantity}</span>
    </div>
  )
}

export default CartContainer

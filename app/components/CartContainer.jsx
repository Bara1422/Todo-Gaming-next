'use client'

import React, { useCallback, useMemo } from 'react'
import { CartIcon } from '../Icons/CartIcon'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '@/app/redux/features/cartSlice'

const CartContainer = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)

  const calculateQuantity = (items) => {
    return items.reduce((acc, cartItem) => {
      return acc + cartItem.quantity
    }, 0)
  }

  const quantity = useMemo(() => calculateQuantity(cartItems), [cartItems])

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

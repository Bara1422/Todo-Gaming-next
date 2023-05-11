import React from 'react'
import { CartIcon } from '../Icons/CartIcon'

const CartContainer = () => {
  return (
    <div className='flex flex-col items-center cursor-pointer'>
      <CartIcon />
      <span className='text-xs font-bold'>2</span>
    </div>
  )
}

export default CartContainer

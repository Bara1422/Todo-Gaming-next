import React from 'react'
import { CartIcon } from '../Icons/CartIcon'

const Cart = () => {
  return (
    <div className='flex flex-col items-center'>
      <CartIcon />
      <span className='text-xs font-bold'>2</span>
    </div>
  )
}

export default Cart

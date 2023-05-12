'use client'

import { formatPrice } from '@/data'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import QuantityManage from './QuantityManage'
import { cartHidden, reset } from '@/redux/features/cartSlice'
import Link from 'next/link'

const Order = () => {
  const dispatch = useDispatch()
  const hidden = useSelector((state) => state.cart.hidden)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const handleToggleCart = () => {
    dispatch(cartHidden())
  }

  const handleClearCart = () => {
    dispatch(reset())
  }

  return (
    <>
      {hidden && (
        <div
          className='fixed h-[calc(100%)] w-full bg-[#000000e6] z-20 flex justify-center items-center'
          onClick={handleToggleCart}
        />
      )}
      <div
        className={`fixed right-0 top-[93px] w-[300px] bg-white h-[calc(100%_-_93px)] z-20 shadow-[4px_0px_5px_4px_grey] flex flex-col duration-300 transform ${
          hidden ? 'translate-x-0' : 'translate-x-full'
        } `}
      >
        <div className='overflow-auto min-h-[100px] max-h-full p-5 h-full'>
          <div className='px-2 py-2 w-full border-b border-gray-500 flex justify-between items-center'>
            <p className='text-black'>Tu pedido:</p>
            <button
              className='text-white h-auto rounded-lg p-2 w-[100px] text-xs  bg-red-600 text-center hover:opacity-70 active:opacity-100 disabled:opacity-40'
              disabled={cartItems.length === 0}
              onClick={handleClearCart}
            >
              Vaciar carrito
            </button>
          </div>

          {cartItems.map((item) => (
            <div
              className='px-2 py-1 w-full border-b border-gray-500 flex justify-between items-center text-black'
              key={item.id}
            >
              <div className='px-2 py-1 grid grid-cols-[50px_100px_100px] justify-between'>
                <div
                  className='w-11 h-11  bg-cover flex items-center justify-center rounded-lg'
                  style={{ backgroundImage: `url(${item.imgUrl})` }}
                />
                <div>
                  <div>{item.name}</div>
                  <p className='text-green-600 font-bold'>
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
                <QuantityManage item={item} />
              </div>
            </div>
          ))}
        </div>

        <div className='shadow-[0px_-2px_10px_0px_gray] flex justify-center'>
          <Link href='/checkout'>
            {cartItems.length !== 0 && (
              <button
                className='m-2 h-auto rounded-lg p-2 w-[200px] text-center hover:opacity-70 active:opacity-100 disabled:opacity-40 bg-red-600'
                onClick={handleToggleCart}
              >
                Ir a pagar {formatPrice(total)}
              </button>
            )}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Order

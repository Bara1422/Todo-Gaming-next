'use client'

/* eslint-disable multiline-ternary */
import React from 'react'
import RemoveIcon from '../Icons/RemoveIcon'
import QuantityButton from './QuantityButton'
import { useDispatch } from 'react-redux'
import { removeCartItem, addCartItem } from '@/redux/features/cartSlice'

const QuantityManage = ({ item }) => {
  const dispatch = useDispatch()

  const removeToOrder = (item) => {
    dispatch(removeCartItem(item))
  }

  const addToOrder = (item) => {
    dispatch(addCartItem(item))
  }

  return (
    <div className='min-w-[100px] max-w-[200px] flex justify-center h-6 items-center rounded-lg m-1 p-2 shadow-md'>
      {+item.quantity === 1 ? (
        <div
          className='w-[17px] h-[17px] cursor-pointer my-2 text-red-600'
          onClick={() => dispatch(removeCartItem(item))}
        >
          <RemoveIcon />
        </div>
      ) : (
        <QuantityButton fn={removeToOrder} item={item}>
          -
        </QuantityButton>
      )}
      <span className='text-sm w-6 text-center'>{item.quantity}</span>
      <QuantityButton fn={addToOrder} item={item}>
        +
      </QuantityButton>
    </div>
  )
}

export default QuantityManage

'use client'

/* eslint-disable multiline-ternary */
import React, { useCallback } from 'react'
import RemoveIcon from '../Icons/RemoveIcon'
import QuantityButton from './QuantityButton'
import { useDispatch } from 'react-redux'
import { removeCartItem, addCartItem } from '@/app/redux/features/cartSlice'

const QuantityManage = ({ item }) => {
  const dispatch = useDispatch()

  const removeToOrder = (dispatch, item) => {
    dispatch(removeCartItem(item))
  }

  const addToOrder = (dispatch, item) => {
    dispatch(addCartItem(item))
  }

  const removeToOrderCallback = useCallback(
    () => removeToOrder(dispatch, item),
    [dispatch, item]
  )

  const addToOrderCallback = useCallback(
    () => addToOrder(dispatch, item),
    [dispatch, item]
  )

  return (
    <div className='min-w-[100px] max-w-[200px] flex justify-center h-6 items-center rounded-lg m-1 p-2 shadow-md'>
      {+item.quantity === 1 ? (
        <button
          className='w-[17px] h-[17px] cursor-pointer my-2 text-red-600'
          onClick={() => dispatch(removeCartItem(item))}
          aria-label={`Remover item ${item.name} del carrito`}
        >
          <RemoveIcon />
        </button>
      ) : (
        <QuantityButton
          fn={removeToOrderCallback}
          item={item}
          label={`Disminuir cantidad de ${item.name}`}
        >
          -
        </QuantityButton>
      )}
      <span className='text-sm w-6 text-center'>{item.quantity}</span>
      <QuantityButton
        fn={addToOrderCallback}
        item={item}
        label={`Aumentar cantidad de ${item.name}`}
      >
        +
      </QuantityButton>
    </div>
  )
}

export default QuantityManage

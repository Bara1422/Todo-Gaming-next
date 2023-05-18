import { formatPrice } from '@/data'
import React from 'react'

const ItemsInThePurchase = ({ product }) => {
  return (
    <span className='text-base flex flex-col'>
      {product.title}.
      <span className='flex'>Cantidad: {product.quantity}.</span>
      <span className='flex'>
        Precio unitario: {formatPrice(product.unitPrice)}.
      </span>
    </span>
  )
}

export default ItemsInThePurchase

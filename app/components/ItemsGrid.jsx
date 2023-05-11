'use client'

import { formatPrice, products } from '@/data'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '@/redux/features/cartSlice'

const ItemsGrid = () => {
  const dispatch = useDispatch()

  const addToOrder = (component) => {
    dispatch(addCartItem(component))
  }

  console.log(products)
  return (
    <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center justify-items-center gap-5 p-12'>
      {products.map((product) => (
        <div
          className='flex justify-center items-center text-black'
          key={product.name}
        >
          <div
            className='max-h-72 h-72  bg-cover bg-top bg-no-repeat filter max-w-xs flex flex-col mt-1 justify-end items-center bg-white shadow-md rounded-md hover:shadow-lg hover:mt-0 hover:cursor-default hover:filter-none '
            style={{
              backgroundImage: `url(${product.imgUrl})`,
              backgroundSize: '10rem'
            }}
          >
            <h5 className='p-1 text-xs sm:text-base'>{product.name}</h5>
            <p className='text-green-500 font-bold'>
              {formatPrice(product.price)}
            </p>
            <button
              className='m-2 text-white h-auto rounded-lg p-2 w-48 cursor-pointer bg-red-500 text-center hover:opacity-70 active:opacity-100'
              onClick={() => addToOrder(product)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemsGrid

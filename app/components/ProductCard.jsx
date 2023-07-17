import React from 'react'
import { convertToWebp } from '../utils/utils'
import { formatPrice } from '@/data'
import Image from 'next/image'

const ProductCard = ({ product, addToOrder }) => {
  return (
    <div className='flex items-center justify-center text-black'>
      <div className='max-h-[300px] h-[300px] relative mx-auto bg-no-repeat filter max-w-[18rem] flex flex-col mt-1 justify-end items-center bg-white shadow-md rounded-md hover:shadow-lg hover:mt-0 hover:cursor-default hover:filter-none contrast-75 hover:contrast-100 '>
        <div className='absolute w-32 h-32 max-w-full top-3 max-h-36 '>
          <Image
            src={convertToWebp(product.imgUrl)}
            alt={`Image of ${product.name}`}
            loading='lazy'
            width={128}
            height={128}
            quality={5}
            style={{
              objectFit: 'cover',
              margin: '0 auto'
            }}
          />
        </div>
        <h3 className='p-1 sm:text-base'>{product.name}</h3>
        <p className='font-bold text-green-600'>{formatPrice(product.price)}</p>
        <button
          className='z-20 w-48 h-auto p-2 m-2 text-center text-white bg-black rounded-lg cursor-pointer hover:opacity-70 active:opacity-100'
          onClick={() => addToOrder(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductCard

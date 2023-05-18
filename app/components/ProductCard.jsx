import React from 'react'
import { convertToWebp } from '../utils/utils'
import { formatPrice } from '@/data'
import Image from 'next/image'

const ProductCard = ({ product, addToOrder }) => {
  return (
    <div className='flex justify-center items-center text-black'>
      <div className='max-h-[300px] h-[300px] relative mx-auto bg-no-repeat filter max-w-[18rem] flex flex-col mt-1 justify-end items-center bg-white shadow-md rounded-md hover:shadow-lg hover:mt-0 hover:cursor-default hover:filter-none contrast-75 hover:contrast-100 '>
        <div className='absolute top-3 max-w-full h-32 w-32 max-h-36 '>
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
        <h5 className='p-1   sm:text-base'>{product.name}</h5>
        <p className='text-green-600 font-bold'>{formatPrice(product.price)}</p>
        <button
          className='m-2 text-white h-auto rounded-lg p-2 w-48 cursor-pointer bg-black text-center hover:opacity-70 active:opacity-100 z-20'
          onClick={() => addToOrder(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductCard

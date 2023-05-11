import React from 'react'
import { products, arraySections, formatPrice } from '@/data'

const Products = () => {
  return (
    <div className='h-full min-h-screen m-0 pt-40 flex flex-col items-center select-none bg-slate-100'>
      <h2 className='text-black text-4xl font-bold'>NUESTROS PRODUCTOS</h2>
      <div className='flex flex-col md:flex-row items-center justify-around mb-5 md:flex-wrap'>
        {arraySections.map((section) => (
          <div
            className='flex  text-gray-800 bg-gray-200 m-5 items-center justify-center font-bold shadow-md rounded-2xl p-4 cursor-pointer'
            key={section.section}
          >
            <p>{section.section}</p>
          </div>
        ))}
        {/*   {products.map(product) => (

          </div>
        )} */}
      </div>
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
              <button className='m-2 text-white h-auto rounded-lg p-2 w-48 cursor-pointer bg-red-500 text-center hover:opacity-70 active:opacity-100'>
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products

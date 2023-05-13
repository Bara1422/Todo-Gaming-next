'use client'

import React from 'react'

import ItemsGrid from '../components/ItemsGrid'

const Products = () => {
  console.log(process.env.API_URL, 'api')
  console.log(process.env.API_BASE, '2api')
  return (
    <div className='h-full min-h-screen m-0 pt-40 flex flex-col items-center select-none bg-slate-100'>
      <h2 className='text-black text-4xl text-center font-bold'>
        NUESTROS PRODUCTOS
      </h2>

      <ItemsGrid />
    </div>
  )
}

export default Products

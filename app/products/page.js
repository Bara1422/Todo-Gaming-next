import React from 'react'
import { arraySections } from '@/data'
import ItemsGrid from '../components/ItemsGrid'

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
      </div>
      <ItemsGrid />
    </div>
  )
}

export default Products

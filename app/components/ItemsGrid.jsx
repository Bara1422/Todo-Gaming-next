'use client'

import { formatPrice, products, arraySections } from '@/data'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '@/redux/features/cartSlice'

const ItemsGrid = () => {
  const dispatch = useDispatch()
  const [selectedSection, setSelectedSection] = useState(null)

  const addToOrder = (component) => {
    dispatch(addCartItem(component))
  }

  const filteredProducts = selectedSection
    ? products.filter((product) => product.categoryId === selectedSection)
    : products

  const handleSection = (sectionId) => {
    setSelectedSection(sectionId)
  }

  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-around mb-5 md:flex-wrap'>
        <button
          onClick={() => setSelectedSection(null)}
          className='flex  text-gray-800 bg-gray-200 m-5 items-center justify-center font-bold shadow-md rounded-2xl p-4 cursor-pointer'
        >
          <p>Todos</p>
        </button>
        {arraySections.map((section, index) => (
          <button
            onClick={() => handleSection(index + 1)}
            className={`flex text-gray-800 m-5 items-center justify-center font-bold shadow-md rounded-2xl p-4 cursor-pointer ${
              selectedSection === index + 1 ? 'bg-gray-300' : 'bg-gray-200'
            }`}
            key={section.section}
          >
            <p>{section.section}</p>
          </button>
        ))}
      </div>
      <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center justify-items-center gap-5 p-12'>
        {filteredProducts.map((product) => (
          <div
            className='flex justify-center items-center text-black'
            key={product.name}
          >
            <div
              className='max-h-[300px] h-[300px]  bg-cover bg-top bg-no-repeat filter max-w-[18rem] flex flex-col mt-1 justify-end items-center bg-white shadow-md rounded-md hover:shadow-lg hover:mt-0 hover:cursor-default hover:filter-none contrast-75 hover:contrast-100 '
              style={{
                backgroundImage: `url(${product.imgUrl})`,
                backgroundSize: '10rem'
              }}
            >
              <h5 className='p-1 text-xs sm:text-base'>{product.name}</h5>
              <p className='text-green-600 font-bold'>
                {formatPrice(product.price)}
              </p>
              <button
                className='m-2 text-white h-auto rounded-lg p-2 w-48 cursor-pointer bg-red-600 text-center hover:opacity-70 active:opacity-100'
                onClick={() => addToOrder(product)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItemsGrid

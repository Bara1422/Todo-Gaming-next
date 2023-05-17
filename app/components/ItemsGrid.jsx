'use client'
/* eslint-disable indent */

import { formatPrice /* products, arraySections  */ } from '@/data'
import React, { useState } from 'react'

import { addCartItem } from '@/app/redux/features/cartSlice'
import { useCategories, useGetProducts } from '@/app/hooks/useCategories'
import { useAppDispatch } from '../redux/hooks'
import { Toaster, toast } from 'react-hot-toast'
import { Spinner } from '@chakra-ui/react'
import Image from 'next/image'

const ItemsGrid = () => {
  const dispatch = useAppDispatch()
  const { data: cates, isLoading: catesLoading } = useCategories()
  const { data: productss } = useGetProducts()
  const [selectedSection, setSelectedSection] = useState(null)

  const addToOrder = (component) => {
    dispatch(addCartItem(component))
    toast.success('Item agregado al carrito', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff'
      }
    })
  }

  const filteredProducts = selectedSection
    ? productss?.result?.filter(
        (product) => product.categoryId === selectedSection
      )
    : productss?.result

  const handleSection = (sectionId) => {
    setSelectedSection(sectionId)
  }

  return (
    <>
      {catesLoading && <Spinner color='black' />}
      <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 items-center justify-around mb-5 md:flex-wrap'>
        {!catesLoading && (
          <button
            onClick={() => setSelectedSection(null)}
            className='flex w-52 text-gray-800 bg-gray-200 gap-3 items-center justify-center font-bold shadow-md rounded-2xl p-4 cursor-pointer'
          >
            <p>Todos</p>
          </button>
        )}
        {cates?.result?.map((section) => (
          <button
            onClick={() => handleSection(section.id)}
            className={`flex w-52 text-gray-800 items-center justify-center font-bold shadow-md rounded-2xl p-4 cursor-pointer ${
              selectedSection === section.id ? 'bg-gray-300' : 'bg-gray-200'
            }`}
            key={section.id}
          >
            <p>{section.category}</p>
          </button>
        ))}
      </div>
      <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center justify-items-center gap-5 p-12'>
        {filteredProducts?.map((product) => (
          <div
            className='flex justify-center items-center text-black'
            key={product.name}
          >
            <div className='max-h-[300px] h-[300px] relative mx-auto bg-no-repeat filter max-w-[18rem] flex flex-col mt-1 justify-end items-center bg-white shadow-md rounded-md hover:shadow-lg hover:mt-0 hover:cursor-default hover:filter-none contrast-75 hover:contrast-100 '>
              <div className='absolute top-0 max-w-full h-36 w-36 max-h-36 '>
                <Image
                  src={product.imgUrl}
                  alt={`Image of ${product.name}`}
                  fill
                  priority
                  style={{ objectFit: 'cover', margin: '0 auto' }}
                />
              </div>
              <h5 className='p-1 text-xs sm:text-base'>{product.name}</h5>
              <p className='text-green-600 font-bold'>
                {formatPrice(product.price)}
              </p>
              <button
                className='m-2 text-white h-auto rounded-lg p-2 w-48 cursor-pointer bg-red-600 text-center hover:opacity-70 active:opacity-100 z-20'
                onClick={() => addToOrder(product)}
              >
                Agregar al carrito
              </button>
            </div>
            <Toaster position='bottom-center' />
          </div>
        ))}
      </div>
    </>
  )
}

export default ItemsGrid

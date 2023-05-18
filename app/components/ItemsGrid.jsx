'use client'
/* eslint-disable indent */

import React, { useCallback, useMemo, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Spinner } from '@chakra-ui/react'

import { useAppDispatch } from '../redux/hooks'
import { useCategories, useGetProducts } from '@/app/hooks/useCategories'
import { addCartItem } from '@/app/redux/features/cartSlice'
import SectionButton from './SectionButton'
import ProductCard from './ProductCard'

const successToastStyle = {
  borderRadius: '10px',
  background: '#333',
  color: '#fff'
}
const ItemsGrid = () => {
  const dispatch = useAppDispatch()
  const { data: cates, isLoading: catesLoading } = useCategories()
  const { data: products } = useGetProducts()
  const [selectedSection, setSelectedSection] = useState(null)

  const addToOrder = (component) => {
    dispatch(addCartItem(component))
    toast.success('Item agregado al carrito', {
      style: successToastStyle
    })
  }

  const filteredProducts = useMemo(() => {
    return selectedSection
      ? products?.result?.filter(
          (product) => product.categoryId === selectedSection
        )
      : products?.result
  }, [selectedSection, products])

  const handleSection = (sectionId) => {
    setSelectedSection(sectionId)
  }

  const handleResetSection = useCallback(() => {
    setSelectedSection(null)
  }, [])

  return (
    <>
      <Toaster position='bottom-center' />
      {catesLoading && <Spinner color='black' />}
      <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 items-center justify-around mb-5 md:flex-wrap'>
        {!catesLoading && (
          <button
            onClick={handleResetSection}
            className='flex w-52 text-gray-800 bg-gray-200 gap-3 items-center justify-center font-bold shadow-md rounded-2xl p-4 cursor-pointer'
          >
            <p>Todos</p>
          </button>
        )}
        {cates?.result?.map((section) => (
          <SectionButton
            key={section.id}
            section={section}
            handleSection={handleSection}
            selectedSection={selectedSection}
          />
        ))}
      </div>
      <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center justify-items-center gap-5 p-6 '>
        {filteredProducts?.map((product) => (
          <ProductCard
            product={product}
            addToOrder={addToOrder}
            key={product.name}
          />
        ))}
      </div>
    </>
  )
}

export default ItemsGrid

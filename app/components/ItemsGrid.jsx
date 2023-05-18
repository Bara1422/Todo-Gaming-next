'use client'
/* eslint-disable indent */

import React, { useCallback, useMemo, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

import { useAppDispatch } from '../redux/hooks'

import { addCartItem } from '@/app/redux/features/cartSlice'
import SectionButton from './SectionButton'
import ProductCard from './ProductCard'

const successToastStyle = {
  borderRadius: '10px',
  background: '#333',
  color: '#fff'
}
const ItemsGrid = ({ cates }) => {
  const dispatch = useAppDispatch()
  const [selectedSection, setSelectedSection] = useState(null)

  const categoriesProducts = cates?.result.map((cate) => {
    return cate.products.map((product) => {
      return product
    })
  })
  const productsMapped = categoriesProducts?.flatMap((product) => product)

  const addToOrder = (component) => {
    dispatch(addCartItem(component))
    toast.success('Item agregado al carrito', {
      style: successToastStyle
    })
  }

  const filteredProducts = useMemo(() => {
    return selectedSection
      ? productsMapped?.filter(
          (product) => product.categoryId === selectedSection
        )
      : productsMapped
  }, [selectedSection, productsMapped])

  const handleSection = (sectionId) => {
    setSelectedSection(sectionId)
  }

  const handleResetSection = useCallback(() => {
    setSelectedSection(null)
  }, [])

  return (
    <>
      <Toaster position='bottom-center' />
      {/* {catesLoading && <Spinner color='black' />} */}
      <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 items-center justify-around mb-5 md:flex-wrap'>
        {/* {!catesLoading && ( */}
        <button
          onClick={handleResetSection}
          className='flex w-52 text-gray-800 bg-gray-200 gap-3 items-center justify-center font-bold shadow-md rounded-2xl p-4 cursor-pointer'
        >
          <p>Todos</p>
        </button>
        {/* )} */}
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

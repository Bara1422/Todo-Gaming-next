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

      <div className='grid items-center justify-around gap-3 mt-4 mb-5 md:grid-cols-2 lg:grid-cols-4 md:flex-wrap'>
        <button
          onClick={handleResetSection}
          className='flex items-center justify-center gap-3 p-4 font-bold text-gray-800 bg-gray-200 shadow-md cursor-pointer w-52 rounded-2xl'
        >
          <p>Todos</p>
        </button>

        {cates?.result?.map((section) => (
          <SectionButton
            key={section.id}
            section={section}
            handleSection={handleSection}
            selectedSection={selectedSection}
          />
        ))}
      </div>
      <div className='grid grid-cols-1 gap-5 p-6 mx-auto text-center md:grid-cols-2 lg:grid-cols-3 justify-items-center '>
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

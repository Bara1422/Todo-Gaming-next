import React from 'react'

import ItemsGrid from '../components/ItemsGrid'
import { getCategories } from '../hooks/useCategoriesFetch'

export const metadata = {
  title: 'Productos | Todo-Gaming',
  description:
    'Todo-Gaming E-commerce dedicado a la venta de componentes para tu PC Gamer, seccion productos'
}

const Products = async () => {
  const { data } = await getCategories()

  return (
    <div className='min-h-[inherit] m-0 sm:pt-36 pt-28 flex flex-col items-center select-none bg-slate-300 pb-[130px]'>
      <h2 className='text-4xl font-bold text-center text-black'>
        NUESTROS PRODUCTOS
      </h2>

      <ItemsGrid cates={data} />
    </div>
  )
}

export default Products

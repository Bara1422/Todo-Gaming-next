import React from 'react'

import ItemsGrid from '../components/ItemsGrid'

export const metadata = {
  title: 'Productos | Todo-Gaming',
  description:
    'Todo-Gaming E-commerce dedicado a la venta de componentes para tu PC Gamer, seccion productos'
}

const Products = () => {
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

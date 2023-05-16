'use client'

import { Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useOrdersWithProducts } from '../hooks/useOrdersWithProducts'
import { useGetProducts } from '../hooks/useCategories'
import Link from 'next/link'
import CustomButton from './CustomButton'
import { formatPrice } from '@/data'
import Image from 'next/image'

const OrderResumeById = ({ id, isLoading, orders }) => {
  const { data: ordersById } = useOrdersWithProducts()
  const { data: products } = useGetProducts()
  const [imageOrders, setImageOrders] = useState(null)

  useEffect(() => {
    const filterProductsById = async () => {
      if (products && orders) {
        await orders.map((order) => {
          const producto = products.result?.find(
            (product) => product.id === order.productsId
          )

          if (producto) {
            order.title = producto.name
            order.imgUrl = producto.imgUrl
          }
          setImageOrders(orders)
          return orders
        })
      }
    }
    filterProductsById()
  }, [orders, products])

  const filteredOrders = ordersById.filter((order) => order.id === Number(id))

  return (
    <>
      {isLoading && <Spinner />}
      <div className='sm:w-4/6 md:px-5 flex items-center '>
        <div className='w-full bg-[#fafafa] text-black rounded-3xl sm:p-5 py-2 '>
          <div className='flex  justify-start items-center border-b  border-[#e5edef] px-5 sm:gap-2 '>
            <Link href='/my-orders'>
              <CustomButton w={16}>Volver</CustomButton>
            </Link>
            <h3 className='w-full flex justify-center font-bold text-2xl'>
              Resumen
            </h3>
          </div>

          <div className='px-5 py-2'>
            <h4 className='mb-2 text-xl font-bold'>Productos</h4>
            <ul>
              {imageOrders?.map((item) => (
                <li
                  key={item.id}
                  className='md:grid flex flex-col md:grid-cols-[auto_1fr_auto] items-center justify-between border-b border-slate-100 last:border-none'
                >
                  <Image
                    width={70}
                    height={70}
                    className=' place-self-start'
                    src={item.imgUrl}
                    alt='Item Image'
                  />
                  <div className='flex w-full sm:pl-2'>
                    <div className='w-full text-sm sm:text-base py-4'>
                      <p>{item.title}</p>
                    </div>
                    <div className='text-right'>
                      <span className='block text-[#7d7d7d]'>
                        x{item.quantity}
                      </span>
                      <strong>{formatPrice(item.unitPrice)}</strong>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className='border-t border-[#e5edef] px-5 py-2'>
            <h4 className='text-xl font-semibold'>Costos</h4>
            <ul>
              <li className='flex items-center justify-between py-1 last:border-t border-gray-500'>
                <span>Costo de los productos</span>
                <span>{formatPrice(filteredOrders[0]?.subtotal)}</span>
              </li>
              <li className='flex items-center justify-between py-1 last:border-t border-gray-500'>
                <span>Costo de envío</span>
                <span>{formatPrice(filteredOrders[0]?.shippingPrice)}</span>
              </li>
              <li className='flex items-center justify-between py-1 last:border-t border-gray-500'>
                <span className='text-xl font-bold'>Total</span>
                <span className=' font-bold text-green-600'>
                  {formatPrice(filteredOrders[0]?.total)}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderResumeById

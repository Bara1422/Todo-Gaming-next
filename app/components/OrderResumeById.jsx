'use client'

import { Spinner } from '@chakra-ui/react'
import React, { useEffect, useMemo } from 'react'
import { useGetProducts } from '../hooks/useCategories'
import Link from 'next/link'
import CustomButton from './CustomButton'
import { formatPrice } from '@/data'
import Image from 'next/image'
import { convertToWebp } from '../utils/utils'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import { authData } from '../utils/safeGetLocalStorage'
import { useGetOrdersByOrderId } from '../hooks/useOrdersWithProducts'

const SHIPPINGPRICE = 250
const OrderResumeById = ({ id }) => {
  const { data: products } = useGetProducts()
  const { data: orders } = useGetOrdersByOrderId(id)
  const router = useRouter()
  const { currentUser } = useAuth()

  const filterProductsById = (orders, products) => {
    if (products && orders) {
      return orders.map((order) => {
        const producto = products.result?.find(
          (product) => product.id === order.productsId
        )

        if (producto) {
          order.title = producto.name
          order.imgUrl = producto.imgUrl
        }

        return order
      })
    }
  }

  const imageOrders = useMemo(
    () => filterProductsById(orders, products),
    [orders, products]
  )

  const totalPrice = imageOrders?.reduce((total, item) => {
    const { unitPrice, quantity } = item
    return total + unitPrice * quantity
  }, 0)

  useEffect(() => {
    if (!currentUser && !authData) {
      router.push('/login')
    }
  }, [currentUser, router])

  return (
    <>
      {totalPrice && imageOrders ? (
        <div className='sm:w-4/6 md:px-5 flex items-center pt-16 pb-[130px]'>
          <div className='w-full bg-[#fafafa] text-black md:rounded-3xl rounded-xl sm:p-5 py-2 '>
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
                      src={convertToWebp(item.imgUrl)}
                      alt={`Item del producto - ${item.title}`}
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
                  <span>{formatPrice(totalPrice)}</span>
                </li>
                <li className='flex items-center justify-between py-1 last:border-t border-gray-500'>
                  <span>Costo de envío</span>
                  <span>{formatPrice(SHIPPINGPRICE)}</span>
                </li>
                <li className='flex items-center justify-between py-1 last:border-t border-gray-500'>
                  <span className='text-xl font-bold'>Total</span>
                  <span className=' font-bold text-green-600'>
                    {formatPrice(SHIPPINGPRICE + totalPrice)}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Spinner size='lg' className='mt-36' />
      )}
    </>
  )
}

export default OrderResumeById

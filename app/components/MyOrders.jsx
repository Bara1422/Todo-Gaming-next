'use client'

import React, { useEffect, useState } from 'react'
import OrderItem from './OrderItem'
import { useAuth } from '../context/AuthContext'
import { useOrdersById } from '../hooks/useCategories'
import { authData } from '../utils/safeGetLocalStorage'
import { useRouter } from 'next/navigation'
import { Spinner } from '@chakra-ui/react'

const MyOrders = () => {
  const { currentUser } = useAuth()
  const {
    data: orders,
    isLoading,
    refetch
  } = useOrdersById(currentUser?.userId || (authData && authData.userId))
  const [local, setLocal] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && currentUser?.userId !== (orders && orders[0]?.userId)) {
      refetch()
    }
  }, [currentUser, refetch, orders, isLoading])

  useEffect(() => {
    if (!currentUser && !authData) {
      router.push('/login')
    }
  }, [currentUser, router])

  useEffect(() => {
    const storedData = localStorage.getItem('myData')
    if (storedData) {
      setLocal(JSON.parse(storedData))
    }
  }, [local])

  return (
    <>
      <section className='sm:w-[70%] pb-[130px] pt-16'>
        <div className='w-full bg-[#0000003d] rounded-2xl sm:p-7 p-0 backdrop-blur-lg text-white'>
          <div className='max-w-screen-lg p-2'>
            <div className='pb-5 border-b border-[#e5edef] mb-5'>
              <h2>Mis ultimos pedidos</h2>
              <p>Haz seguimiento de tus pedidos anteriores</p>
            </div>
            <div>
              {isLoading ? (
                <Spinner
                  size='lg'
                  className='mx-auto w-full'
                  style={{ display: 'block' }}
                />
              ) : (
                <>
                  {orders?.map((order) => (
                    <OrderItem order={order} key={order.id} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyOrders

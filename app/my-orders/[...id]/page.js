'use client'

import LayoutPage from '@/app/components/LayoutPage'
import OrderResumeById from '@/app/components/OrderResumeById'
import Wrapper from '@/app/components/Wrapper'
import { useAuth } from '@/app/context/AuthContext'
import { useOrdersById } from '@/app/hooks/useCategories'

import { useGetOrdersByOrderId } from '@/app/hooks/useOrdersWithProducts'
import { authData } from '@/app/utils/safeGetLocalStorage'

import { Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

const OrderResume = ({ params }) => {
  const { id } = params
  const router = useRouter()
  const { data: orders, isLoading } = useGetOrdersByOrderId(id[0])
  const { currentUser } = useAuth()
  const { data: ordersById, isLoading: ordersLoading } = useOrdersById()
  const [isFilteredOrdersResolved, setIsFilteredOrdersResolved] =
    useState(false)

  const filteredOrders = useMemo(() => {
    return (
      ordersById && ordersById?.find((order) => order?.id === Number(id[0]))
    )
  }, [ordersById, id])

  useEffect(() => {
    if (!ordersLoading) {
      if (!filteredOrders) {
        router.push('/')
      } else {
        setIsFilteredOrdersResolved(true)
      }
    }
  }, [filteredOrders, router, ordersLoading])

  useEffect(() => {
    if (!currentUser && !authData) {
      router.push('/login')
    }
  }, [currentUser, router])
  return (
    <LayoutPage img='ordersBg.webp'>
      <Wrapper>
        {isLoading || !isFilteredOrdersResolved ? (
          <Spinner />
        ) : (
          <OrderResumeById id={id[0]} orders={orders} isLoading={isLoading} />
        )}
      </Wrapper>
    </LayoutPage>
  )
}

export default OrderResume

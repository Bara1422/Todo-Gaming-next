'use client'

import LayoutPage from '@/app/components/LayoutPage'
import OrderResumeById from '@/app/components/OrderResumeById'
import Wrapper from '@/app/components/Wrapper'
import { useAuth } from '@/app/context/AuthContext'

import { useGetOrdersByOrderId } from '@/app/hooks/useOrdersWithProducts'
import { authData } from '@/app/utils/safeGetLocalStorage'

import { Spinner } from '@chakra-ui/react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

const OrderResume = ({ params }) => {
  const { id } = params
  const { data: orders, isLoading } = useGetOrdersByOrderId(id[0])
  const { currentUser } = useAuth()

  useEffect(() => {
    if (!currentUser && !authData) {
      redirect('/login')
    }
  })

  return (
    <LayoutPage img='ordersBg.jpg'>
      <Wrapper>
        {isLoading ? (
          <Spinner />
        ) : (
          <OrderResumeById id={id[0]} orders={orders} isLoading={isLoading} />
        )}
      </Wrapper>
    </LayoutPage>
  )
}

export default OrderResume

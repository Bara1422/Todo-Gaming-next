'use client'

import LayoutPage from '@/app/components/LayoutPage'
import OrderResumeById from '@/app/components/OrderResumeById'
import Wrapper from '@/app/components/Wrapper'

import { useGetOrdersByOrderId } from '@/app/hooks/useOrdersWithProducts'

import { Spinner } from '@chakra-ui/react'

const OrderResume = ({ params }) => {
  const { id } = params
  const { data: orders, isLoading } = useGetOrdersByOrderId(id[0])

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

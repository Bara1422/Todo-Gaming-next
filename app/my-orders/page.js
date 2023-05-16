'use client'

import React, { useEffect } from 'react'
import MyOrders from '../components/MyOrders'
import Wrapper from '../components/Wrapper'
import LayoutPage from '../components/LayoutPage'
import { useOrdersById } from '../hooks/useCategories'
import { Spinner } from '@chakra-ui/react'
import { useAuth } from '../context/AuthContext'
import { redirect } from 'next/navigation'

const Orders = () => {
  const { data, isLoading } = useOrdersById()

  const { currentUser } = useAuth()

  useEffect(() => {
    if (!currentUser) {
      redirect('/login')
    }
  })

  return (
    <LayoutPage img='ordersBg.jpg'>
      <Wrapper>{isLoading ? <Spinner /> : <MyOrders orders={data} />}</Wrapper>
    </LayoutPage>
  )
}

export default Orders

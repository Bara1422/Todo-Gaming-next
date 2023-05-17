'use client'

import React, { useEffect, useState } from 'react'
import MyOrders from '../components/MyOrders'
import Wrapper from '../components/Wrapper'
import LayoutPage from '../components/LayoutPage'
import { useOrdersById } from '../hooks/useCategories'
import { Spinner } from '@chakra-ui/react'
import { useAuth } from '../context/AuthContext'
import { redirect } from 'next/navigation'
import { authData } from '../utils/safeGetLocalStorage'

const Orders = () => {
  const { data, isLoading } = useOrdersById()
  const [, setLocal] = useState(null)
  const { currentUser } = useAuth()

  useEffect(() => {
    if (!currentUser && !authData) {
      redirect('/login')
    }
  }, [currentUser])

  useEffect(() => {
    const storedData = localStorage.getItem('myData')
    if (storedData) {
      setLocal(JSON.parse(storedData))
    }
  }, [])

  return (
    <LayoutPage img='ordersBg.webp'>
      <Wrapper>{isLoading ? <Spinner /> : <MyOrders orders={data} />}</Wrapper>
    </LayoutPage>
  )
}

export default Orders

'use client'

import React, { useEffect, useState } from 'react'
import MyOrders from '../components/MyOrders'
import Wrapper from '../components/Wrapper'
import LayoutPage from '../components/LayoutPage'
import { useOrdersById } from '../hooks/useCategories'
import { Spinner } from '@chakra-ui/react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { authData } from '../utils/safeGetLocalStorage'

const Orders = () => {
  const { currentUser } = useAuth()
  const { data, isLoading, refetch } = useOrdersById(currentUser?.userId)
  const [local, setLocal] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (!currentUser && !authData) {
      router.push('/login')
    }
  }, [currentUser, router])

  useEffect(() => {
    if (!isLoading && currentUser?.userId !== (data && data[0]?.userId)) {
      refetch()
    }
  }, [currentUser, refetch, data, isLoading])

  useEffect(() => {
    const storedData = localStorage.getItem('myData')
    if (storedData) {
      setLocal(JSON.parse(storedData))
    }
  }, [local])

  return (
    <LayoutPage img='ordersBg.webp'>
      <Wrapper>
        {isLoading ? (
          <Spinner className='mt-36' size='lg' />
        ) : (
          <MyOrders orders={data} />
        )}
      </Wrapper>
    </LayoutPage>
  )
}

export default Orders

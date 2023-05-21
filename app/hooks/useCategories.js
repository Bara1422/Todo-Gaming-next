'use client'

import { useAxios } from '@/app/context/AxiosContext'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../context/AuthContext'

export const useGetProducts = () => {
  const axios = useAxios()
  return useQuery(['products'], async () => {
    const { data } = await axios.get('products')
    return data.data
  })
}

export const useOrdersById = (userId) => {
  const axios = useAxios()
  const { currentUser } = useAuth()

  return useQuery(['orders', userId], async () => {
    try {
      const { data } = await axios.get('orders')
      const orders = await data.data.result
      const filteredOrders = await orders.filter(
        (order) => order.userId === (currentUser && currentUser.userId)
      )

      const ordersEnd = await filteredOrders.map((order) => {
        const newCreatedAt = order.createdAt.substring(0, 10)
        const newUpdatedAt = order.updatedAt.substring(0, 10)
        return {
          ...order,
          createdAt: newCreatedAt,
          updatedAt: newUpdatedAt
        }
      })
      return ordersEnd
    } catch (e) {
      console.log(e.message)
    }
  })
}

'use client'

import { useState } from 'react'
import { useAxios } from '../context/AxiosContext'

export const useCreateOrder = () => {
  const [initPoint, setInitPoint] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const axios = useAxios()
  const createOrder = async (userId, domicilio, localidad, items, subtotal) => {
    setIsLoading(true)
    try {
      const response = await axios.post('orders', {
        userId,
        shippingDetails: {
          domicilio,
          localidad
        },
        items,
        shippingPrice: 250,
        subtotal,
        total: subtotal + 250
      })
      const { data } = response
      setInitPoint(data.data.result.init_point)
      return data
    } catch (error) {
      console.error(error.response.data)
    } finally {
      setIsLoading(false)
    }
  }
  return { createOrder, initPoint, isLoading }
}

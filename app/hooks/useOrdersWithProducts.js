import { useEffect, useState } from 'react'
import { useGetProducts, useOrdersById } from './useCategories'
import { useAxios } from '../context/AxiosContext'
import { useQuery } from '@tanstack/react-query'

export const useOrdersWithProducts = () => {
  const { data: products, isLoading: productsLoading } = useGetProducts()
  const { data: ordersId, isLoading: ordersLoading } = useOrdersById()

  const [ordersWithProducts, setOrdersWithProducts] = useState([])

  useEffect(() => {
    if (products && ordersId) {
      const ordersWithProductsData = ordersId.map((order) => {
        const productsInOrder = order.products?.map((product) => {
          const productData = products.find((p) => p.id === product.productsId)
          return { ...product, ...productData }
        })
        return { ...order, products: productsInOrder }
      })
      setOrdersWithProducts(ordersWithProductsData)
    }
  }, [products, ordersId])

  return {
    data: ordersWithProducts,
    isLoading: productsLoading || ordersLoading
  }
}

export const useGetOrdersByOrderId = (orderId) => {
  const axios = useAxios()
  return useQuery([orderId], async () => {
    const { data } = await axios.get(`orders/${orderId}/order-items`)

    return data
  })
}

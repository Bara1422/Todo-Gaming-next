import { useAxios } from '@/app/context/AxiosContext'
import { useQuery } from '@tanstack/react-query'

export const useCategories = () => {
  const axios = useAxios()
  return useQuery(['categories'], async () => {
    const { data } = await axios.get('category')

    return data.data
  })
}

export const useGetProducts = () => {
  const axios = useAxios()
  return useQuery(['products'], async () => {
    const { data } = await axios.get('products')

    return data.data
  })
}

export const useOrdersById = () => {
  const stringData = localStorage.getItem('authData')
  const authData = JSON.parse(stringData)
  const axios = useAxios()
  return useQuery(['orders', authData?.userId], async () => {
    try {
      const { data } = await axios.get('orders')
      const orders = await data.data.result

      const filteredOrders = await orders.filter(
        (order) => order.userId === authData.userId
      )
      const ordersEnd = filteredOrders.map((order) => {
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

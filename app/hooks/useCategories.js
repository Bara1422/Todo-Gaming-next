import { useAxios } from '@/app/context/AxiosContext'
import { useQuery } from '@tanstack/react-query'

export const useCategories = () => {
  const axios = useAxios()
  return useQuery(['categories'], async () => {
    const { data } = await axios.get('category')
    console.log(data.data)
    return data.data
  })
}

export const useGetProducts = () => {
  const axios = useAxios()
  return useQuery(['products'], async () => {
    const { data } = await axios.get('products')
    console.log(data.data)
    return data.data
  })
}

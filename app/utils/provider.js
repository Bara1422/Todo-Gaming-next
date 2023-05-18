'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AxiosProvider } from '@/app/context/AxiosContext'
import { AuthProvider } from '@/app/context/AuthContext'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function Provider({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } }
  })
  return (
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {children} <ReactQueryDevtools />
        </AuthProvider>
      </QueryClientProvider>
    </AxiosProvider>
  )
}

export default Provider

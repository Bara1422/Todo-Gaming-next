'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AxiosProvider } from '@/app/context/AxiosContext'
import { AuthProvider } from '@/app/context/AuthContext'

function Provider({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <AxiosProvider>
        <AuthProvider>{children}</AuthProvider>
      </AxiosProvider>
    </QueryClientProvider>
  )
}

export default Provider

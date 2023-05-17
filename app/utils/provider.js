'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AxiosProvider } from '@/app/context/AxiosContext'
import { AuthProvider } from '@/app/context/AuthContext'

function Provider({ children }) {
  const queryClient = new QueryClient()
  return (
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </AxiosProvider>
  )
}

export default Provider

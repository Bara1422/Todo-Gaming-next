'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AxiosProvider } from '@/app/context/AxiosContext'
import { AuthProvider } from '@/app/context/AuthContext'
import { Providers } from '../redux/provider'

function Provider({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <AxiosProvider>
        <AuthProvider>
          <Providers>{children}</Providers>
        </AuthProvider>
      </AxiosProvider>
    </QueryClientProvider>
  )
}

export default Provider

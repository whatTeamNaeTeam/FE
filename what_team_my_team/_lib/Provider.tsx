'use client'

import React from 'react'
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { useApiError } from '@/_hook/useApiError'

function Providers({ children }: React.PropsWithChildren) {
  const { handleError } = useApiError()
  const [client] = React.useState(
    new QueryClient({
      queryCache: new QueryCache({
        onError: handleError,
      }),
      defaultOptions: {
        queries: {
          staleTime: 5000,
          retry: false,
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
          throwOnError: true,
        },
        mutations: {
          onError: handleError,
        },
      },
    }),
  )

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Providers

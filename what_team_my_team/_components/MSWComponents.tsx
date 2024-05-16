'use client'

import { useEffect } from 'react'

export const MswComponent = () => {
  useEffect(() => {
    if (
      process.env.NODE_ENV === 'development' &&
      process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
    ) {
      if (typeof window === 'undefined') {
        ;(async () => {
          const { server } = await import('@/_mocks/server')
          server.listen()
        })()
      } else {
        ;(async () => {
          const { worker } = await import('@/_mocks/browser')
          worker.start()
        })()
      }
    }
  })

  return null
}

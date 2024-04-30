'use client'

import { useEffect } from 'react'

export const MswComponent = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
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

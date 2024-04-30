export async function initMsw() {
  if (typeof window === 'undefined') {
    const { server } = await import('@/_mocks/server')
    server.listen({ onUnhandledRequest: 'error' })
  } else {
    const { worker } = await import('@/_mocks/browser')
    worker.start({ onUnhandledRequest: 'error' })
  }
}

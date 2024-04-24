'use client'

import React from 'react'
import { Provider, createStore } from 'jotai'

const JotaiProvider = ({ children }: React.PropsWithChildren) => {
  const myStore = createStore()
  return <Provider store={myStore}>{children}</Provider>
}

export default JotaiProvider

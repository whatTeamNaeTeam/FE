import React, { Suspense } from 'react'
import Callback from './_components/callback'
import WaitingModal from '@/_components/loading/WaitingModal'

const page = () => {
  return (
    <Suspense fallback={<></>}>
      <div>
        <Callback />
        <WaitingModal open={true} />
      </div>
    </Suspense>
  )
}

export default page

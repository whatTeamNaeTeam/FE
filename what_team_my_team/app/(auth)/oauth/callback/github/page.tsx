import React from 'react'
import Callback from './_components/callback'
import WaitingModal from '@/_components/WaitingModal'

const page = () => {
  return (
    <div>
      <Callback />
      <WaitingModal open={true} />
    </div>
  )
}

export default page

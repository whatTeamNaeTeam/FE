import React from 'react'
import { ProfileContainer } from './_components/ProfileContainer'

const page = ({ params }: { params: { slug: string } }) => {
  const userId = params.slug

  return (
    <div className="w-full px-2">
      <ProfileContainer userId={userId} />
    </div>
  )
}

export default page

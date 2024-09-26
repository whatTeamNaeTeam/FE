import React from 'react'
import { TeamListContainer } from './_components/TeamListContainer'

function page({ params }: { params: { slug: string } }) {
  const userId = params.slug
  return (
    <div className="w-full">
      <TeamListContainer userId={userId} />
    </div>
  )
}

export default page

import React from 'react'
import Container from './_components/Container'

const page = ({ params }: { params: { slug: string } }) => {
  const userId = params.slug
  return (
    <div className="w-full">
      <Container userId={userId} />
    </div>
  )
}

export default page

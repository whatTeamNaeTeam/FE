import React from 'react'
import ProjectListContainer from './_components/ProjectListContainer'

const page = ({ params }: { params: { slug: string } }) => {
  const userId = params.slug

  return (
    <div className="flex flex-col gap-2 w-full px-4">
      <ProjectListContainer userId={userId} />
    </div>
  )
}

export default page

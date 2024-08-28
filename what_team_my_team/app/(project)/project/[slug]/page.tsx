import React from 'react'
import ProjectContainer from './_components/ProjectContainer'

const ProjectDetailPage = ({ params }: { params: { slug: string } }) => {
  const teamId = params.slug

  return (
    <div className="w-full flex flex-col items-center">
      <ProjectContainer teamId={teamId} />
    </div>
  )
}

export default ProjectDetailPage

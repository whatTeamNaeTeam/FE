import React from 'react'
import ProjectContainer from './_components/ProjectContainer'

const ProjectDetailPage = ({ params }: { params: { slug: string } }) => {
  const projectId = params.slug

  return (
    <div className="w-full flex flex-col items-center">
      <ProjectContainer projectId={projectId} />
    </div>
  )
}

export default ProjectDetailPage

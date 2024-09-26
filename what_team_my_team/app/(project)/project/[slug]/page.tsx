import React from 'react'
import { ProjectContainer } from './_components/ProjectContainer'
import ApiErrorBoundary from '@/_components/error/ApiErrorBoundary'

const ProjectDetailPage = ({ params }: { params: { slug: string } }) => {
  const teamId = params.slug

  return (
    <ApiErrorBoundary>
      <div className="w-full flex flex-col items-center">
        <ProjectContainer teamId={teamId} />
      </div>
    </ApiErrorBoundary>
  )
}

export default ProjectDetailPage

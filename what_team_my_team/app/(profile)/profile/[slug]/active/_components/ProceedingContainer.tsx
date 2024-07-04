'use client'

import ProjectCard from '@/_components/ProjectCard'
import ProjectCardSkeleton from '@/_components/ProjectCardSkeleton'
import useProjectCard from '@/_services/queries/useProjectCard'
import React from 'react'

interface ProceedingContainerProps {
  userId: string
}

const ProceedingContainer = ({ userId }: ProceedingContainerProps) => {
  const { data, isLoading } = useProjectCard(userId, 'inprogress')
  return (
    <div className="w-full">
      {isLoading && (
        <div className="grid gird-cols-1 gap-4 sm:grid-cols-2">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      )}
      {data &&
        (data.team.length === 0 ? (
          <div className="w-full h-[200px]">프로젝트가 없습니다.</div>
        ) : (
          <div className="grid gird-cols-1 gap-4 sm:grid-cols-2">
            {data.team.map((project) => (
              <ProjectCard key={`${project.id}`} project={project} />
            ))}
          </div>
        ))}
    </div>
  )
}

export default ProceedingContainer

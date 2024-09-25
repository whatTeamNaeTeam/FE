'use client'

import NoDataComponent from '@/_components/NoDataComponent'
import { ProjectCard } from '@/_components/ProjectCard'
import ProjectCardSkeleton from '@/_components/ProjectCardSkeleton'
import { useActivePageProjectList } from '@/_hook/queries/project/useActivePageProjectList'
import React from 'react'

interface CompletedContainerProps {
  userId: string
}

const CompletedContainer = ({ userId }: CompletedContainerProps) => {
  const { data, isLoading } = useActivePageProjectList({
    userId,
    keyword: 'accomplished',
  })

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
          <NoDataComponent
            title="완료 프로젝트가 없습니다."
            img={'/assets/stakeholder.png'}
          />
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

export default CompletedContainer

'use client'

import React, { useRef } from 'react'
import { useObserver } from '@/_hook/useObserver'
import { useMainPageProjectList } from '@/_hook/queries/project/useMainPageProjectList'
import { ProjectCard } from '@/_components/ProjectCard'
import { TailSpin } from 'react-loader-spinner'
import { ConvertedGetMainPageProjectReturn } from '@/_services/type'

const NotFinishedProjectContainer = () => {
  const bottom = useRef<HTMLDivElement | null>(null)
  const { hasNextPage, fetchNextPage, status, data, isFetchingNextPage } =
    useMainPageProjectList({
      keyword: 'inprogress',
    })

  const onIntersect = (entries: IntersectionObserverEntry[]) => {
    if (status === 'error') {
      return
    }
    const firstEntry = entries[0]
    if (hasNextPage && firstEntry.isIntersecting) {
      fetchNextPage()
    }
  }

  useObserver({
    target: bottom,
    onIntersect,
    rootMargin: '8px',
  })

  return (
    <div className="w-full max-w-[1080px] px-4 py-2">
      <h3 className="mb-2">진행중인 프로젝트</h3>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {status === 'success' &&
          data.pages.map((group) =>
            group.results.map(
              (
                project: ConvertedGetMainPageProjectReturn['results'][number],
              ) => (
                <ProjectCard
                  key={`project-inprogress-${project.id}`}
                  project={project}
                />
              ),
            ),
          )}
      </div>
      <div ref={bottom}></div>
      {isFetchingNextPage && (
        <div className="flex justify-center items-center py-4">
          <TailSpin height={50} width={50} color="#ff0000" />
        </div>
      )}
    </div>
  )
}

export default NotFinishedProjectContainer

'use client'

import React from 'react'
import useProjectDetail from '@/_services/queries/useProjectDetail'
import PositionList from './PositionList'
import ProjectExplain from './ProjectExplain'
import PrimaryInfo from './PrimaryInfo'
import SideMenu from './SideMenu'
import LinkList from './LinkList'
import ApplyDialog from './ApplyDialog'

interface ProjectContainerProps {
  projectId: string
}

const ProjectContainer = ({ projectId }: ProjectContainerProps) => {
  const { data, isLoading } = useProjectDetail(projectId)

  return (
    <div className="flex justify-between w-full max-w-[1060px]">
      <ApplyDialog projectId={projectId} />
      {isLoading && <div className="">...로딩중</div>}
      {data && (
        <div className="flex flex-col gap-8 w-full px-6 py-12 md:flex-1 md:w-[330px]">
          <PrimaryInfo team={data.team} />
          <PositionList positions={data.tech} />
          <ProjectExplain explain={data.team.explain} />
          <LinkList urls={data.url} />
        </div>
      )}
      <SideMenu />
    </div>
  )
}

export default ProjectContainer

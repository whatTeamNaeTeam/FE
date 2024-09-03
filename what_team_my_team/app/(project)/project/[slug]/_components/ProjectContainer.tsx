'use client'

import React from 'react'
import PositionList from './PositionList'
import ProjectExplain from './ProjectExplain'
import PrimaryInfo from './PrimaryInfo'
import LinkList from './LinkList'
import ApplyDialog from './ApplyDialog'
import { ImageSection } from './ImageSection'
import { useProjectDetail } from '@/_hook/queries/project/useProjectDetail'

interface ProjectContainerProps {
  teamId: string
}

const ProjectContainer = ({ teamId }: ProjectContainerProps) => {
  const { data } = useProjectDetail({ teamId })

  if (!data) {
    return <div className="">...로딩중</div>
  }

  return (
    <div className="flex justify-between w-full max-w-[1048px] px-2">
      <ApplyDialog teamId={teamId} />
      <div className="flex flex-col gap-8 w-full px-6 py-12 md:flex-1 md:w-[330px]">
        <PrimaryInfo team={data.team} isOwner={data.isLeader} />
        <PositionList positions={data.team.category} />
        {data.team.imageUrl && <ImageSection imageList={data.team.imageUrl} />}
        <ProjectExplain explain={data.team.explain} />
        <LinkList urls={data.team.urls} />
      </div>
    </div>
  )
}

export default ProjectContainer

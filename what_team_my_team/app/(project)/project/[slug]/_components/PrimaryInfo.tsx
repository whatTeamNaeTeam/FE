'use client'

import { ProjectDetailReturn } from '@/_services/queries/useProjectDetail'
import { ConvertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import Link from 'next/link'
import React from 'react'

interface PrimaryInfoProps {
  team: ConvertSnakeToCamel<ProjectDetailReturn>
}

const PrimaryInfo = ({ team }: PrimaryInfoProps) => {
  return (
    <div className=" border-b border-gray-4 py-3">
      <h3 className="text-2xl font-bold mb-2">{team.team.title}</h3>
      <div className="flex gap-4 text-sm text-gray-6">
        <Link href={`/profile/${team.team.leaderInfo.id}`}>
          {team.team.leaderInfo.name}
        </Link>
        <div className="flex gap-1">
          <span>조회수 {team.team.view}</span>
          <span>스크랩 {team.team.like}</span>
        </div>
      </div>
    </div>
  )
}

export default PrimaryInfo

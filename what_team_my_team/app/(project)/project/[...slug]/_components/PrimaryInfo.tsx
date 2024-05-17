'use client'

import { Team } from '@/_services/queries/useProjectDetail'
import React from 'react'

interface PrimaryInfoProps {
  team: Team
}

const PrimaryInfo = ({ team }: PrimaryInfoProps) => {
  return (
    <div className=" border-b-[1px] border-gray-4 py-4">
      <h3 className="text-2xl font-bold">{team.name}</h3>
      <div className="flex gap-1 text-sm text-gray-6">
        <span>{team.leaderName}</span>
        <span>조회수 0</span>
        <span>관심가지는 사람 0</span>
      </div>
    </div>
  )
}

export default PrimaryInfo

'use client'

import ProfileAvatar from '@/_components/ProfileAvatar'
import { ConvertedGetProjectDetailReturn } from '@/_services/type'
import Link from 'next/link'
import React from 'react'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { LikeSection } from './LikeSection'
import Button from '@/_components/ui/Button'

interface PrimaryInfoProps {
  team: ConvertedGetProjectDetailReturn['team']
  isOwner: ConvertedGetProjectDetailReturn['isLeader']
}

export function PrimaryInfo({ team, isOwner }: PrimaryInfoProps) {
  return (
    <div className="flex justify-between border-b border-gray-4 py-3">
      <div>
        <h3 className="text-2xl font-bold mb-2">{team.title}</h3>
        <div className="flex gap-4 text-sm text-gray-6">
          <Link
            href={`/profile/${team.leaderInfo.id}`}
            className="flex items-center gap-1"
          >
            <ProfileAvatar
              imgUrl={team.leaderInfo.imageUrl}
              alt="."
              size={'small'}
            />
            {team.leaderInfo.name}
          </Link>
          <div className="flex gap-1">
            <span className="inline-flex items-center gap-1">
              <MdOutlineRemoveRedEye />
              조회수 {team.view}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <LikeSection
          teamId={team.id}
          data={{ like: team.like, isLike: team.isLike, version: team.version }}
        />
        {isOwner && <Button>수정</Button>}
      </div>
    </div>
  )
}

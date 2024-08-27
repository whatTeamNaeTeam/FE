'use client'

import ProfileAvatar from '@/_components/ProfileAvatar'
import { TeamCamel } from '@/_services/queries/useMyTeam'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface TeamProps {
  item: TeamCamel
}

const Team = ({ item }: TeamProps) => {
  return (
    <li className="flex w-full rounded-2xl hover:shadow-md">
      <button className="w-full">
        <Link href={`/project/${item.id}/manage`}>
          <div className="flex items-center gap-2 py-4 px-4">
            <Image
              width={40}
              height={40}
              src={'/assets/logo.svg'}
              alt="썸네일"
              className="w-20 h-20 border border-gray-4 rounded-lg"
            />
            <div className="flex flex-col">
              <span>{item.title}</span>
            </div>
          </div>
        </Link>
      </button>
      {/* <div className="flex items-center">
        <span className="flex items-center justify-center">
          <ProfileAvatar
            imgUrl={item.leaderInfo.imageUrl}
            size={'x-small'}
            alt="프로필"
          />
        </span>
        <span>{item.leaderInfo.name}</span>
      </div> */}
    </li>
  )
}

export default Team

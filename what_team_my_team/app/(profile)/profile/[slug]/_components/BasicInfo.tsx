'use client'

import ProfileAvatar from '@/_components/ProfileAvatar'
import Button from '@/_components/ui/Button'
import { UserProfileCamel } from '@/_services/queries/useUserProfile'
import Link from 'next/link'
import React from 'react'

const BasicInfo = ({ data }: { data: UserProfileCamel }) => {
  return (
    <div className="flex justify-between items-center mb-12">
      <div className="flex gap-4">
        <ProfileAvatar
          imgUrl={data?.profile.imageUrl}
          alt={data.profile.name}
          size={'large'}
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold">{data.profile.name}</span>
          <div className="flex flex-col">
            <span className="text-xs text-gray-6">
              {data.profile.isApproved ? '정회원' : '준회원'}
            </span>
            <span className="text-sm">{data.profile.studentNum}</span>
          </div>
        </div>
      </div>
      {data.isOwner && (
        <Link href={`/profile/${data.profile.id}/setting`}>
          <Button variant={'lined'}>설정</Button>
        </Link>
      )}
    </div>
  )
}

export default BasicInfo

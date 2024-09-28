'use client'

import React from 'react'
import BasicInfo from './BasicInfo'
import LinkInfo from './LinkInfo'
import MyExplainInfo from './MyExplainInfo'
import TechInfo from './TechInfo'
import PositionInfo from './PositionInfo'
import { useUserProfile } from '@/_hook/queries/profile/useUserProfile'
import { ProfileSkeleton } from '@/_components/loading/ProfileSkeleton'

interface ProfileContainerProps {
  userId: string
}

const ProfileContainer = ({ userId }: ProfileContainerProps) => {
  const { data } = useUserProfile({ userId })

  if (!data) {
    return <ProfileSkeleton />
  }

  return (
    <>
      <div className="w-full max-w-[1060px]">
        <BasicInfo data={data} />
        <div className="flex flex-col gap-4">
          <PositionInfo position={data.profile.position} />
          <TechInfo tech={data.tech} />
          <MyExplainInfo explain={data.profile.explain} />
          <LinkInfo urls={data.url} />
        </div>
      </div>
    </>
  )
}

export default ProfileContainer

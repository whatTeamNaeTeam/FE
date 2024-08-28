'use client'

import useUserProfile from '@/_services/queries/useUserProfile'
import React from 'react'
import BasicInfo from './BasicInfo'
import LinkInfo from './LinkInfo'
import MyExplainInfo from './MyExplainInfo'
import TechInfo from './TechInfo'
import PositionInfo from './PositionInfo'

interface ProfileContainerProps {
  userId: string
}

const ProfileContainer = ({ userId }: ProfileContainerProps) => {
  const { data, isLoading } = useUserProfile(userId)

  return (
    <>
      {isLoading && <div>로딩중...</div>}
      {data && (
        <div className="w-full max-w-[1060px]">
          <BasicInfo data={data} />
          <div className="flex flex-col gap-4">
            <PositionInfo position={data.profile.position} />
            <TechInfo tech={data.tech} />
            <MyExplainInfo explain={data.profile.explain} />
            <LinkInfo urls={data.url} />
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileContainer

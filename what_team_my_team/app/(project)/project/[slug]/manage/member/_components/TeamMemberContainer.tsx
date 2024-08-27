'use client'

import useMyTeamDetail from '@/_services/queries/useMyTeamDetail'
import React from 'react'
import { useAtomValue } from 'jotai'
import { userState } from '@/_stores/atoms/user'
import MemberList from './MemberList'

interface TeamMemberContainerProps {
  teamId: string
}

const TeamMemberContainer = ({ teamId }: TeamMemberContainerProps) => {
  const { data, isLoading } = useMyTeamDetail({ teamId })
  const user = useAtomValue(userState)

  return (
    <div className="w-full max-w-[1048px] px-2 lg:px-0">
      <MemberList teamId={teamId} isLoading={isLoading} data={data} />
    </div>
  )
}

export default TeamMemberContainer

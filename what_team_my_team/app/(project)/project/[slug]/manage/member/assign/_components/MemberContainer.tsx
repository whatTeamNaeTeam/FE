'use client'

import { useNotApprovedMember } from '@/_services/queries/useNotApprovedMember'
import { MemberList } from './MemberList'

interface MemberContainerProps {
  teamId: string
}

const MemberContainer = ({ teamId }: MemberContainerProps) => {
  const { data, isLoading } = useNotApprovedMember({ teamId })

  return (
    <>
      <MemberList isLoading={isLoading} data={data} />
    </>
  )
}

export default MemberContainer

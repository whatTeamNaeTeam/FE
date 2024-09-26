'use client'

import MemberItem from './MemberItem'
import { cn } from '@/_lib/utils'
import NoDataComponent from '@/_components/NoDataComponent'
import { ConvertedMyTeamDetailReturn } from '@/_services/type'

interface MemberListProps {
  teamId: string
  isLoading: boolean
  data: ConvertedMyTeamDetailReturn | undefined
}

const MemberList = ({ teamId, isLoading, data }: MemberListProps) => {
  return (
    <>
      <h3 className="text-xl py-2 font-bold">승인 멤버</h3>
      {isLoading && <div>로딩중...</div>}
      {data &&
        (data.membersInfo.length === 0 ? (
          <NoDataComponent
            img={'/assets/stakeholder.png'}
            title="팀원이 없습니다."
            content="함께할 팀원들을 구해보아요!"
          />
        ) : (
          <ul
            className={cn(
              'grid grid-cols-1 gap-3',
              'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
            )}
          >
            {data.membersInfo.map((item) => (
              <MemberItem
                key={`member-${item.id}`}
                teamId={teamId}
                memberData={item}
                leaderId={data.leaderInfo.id}
              />
            ))}
          </ul>
        ))}
    </>
  )
}

export default MemberList

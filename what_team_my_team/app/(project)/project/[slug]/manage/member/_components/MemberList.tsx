'use client'

import { MyTeamDetailResponse } from '@/_services/queries/useMyTeamDetail'
import { ConvertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import MemberItem from './MemberItem'
import { cn } from '@/_lib/utils'

interface MemberListProps {
  teamId: string
  isLoading: boolean
  data: ConvertSnakeToCamel<MyTeamDetailResponse> | undefined
}

const MemberList = ({ teamId, isLoading, data }: MemberListProps) => {
  return (
    <>
      <h3 className="text-xl py-2 font-bold">승인 멤버</h3>
      {isLoading && <div>로딩중...</div>}
      {data &&
        (data.membersInfo.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full">
            <img src="/assets/stakeholder.png" width={200} height={200} />
            <span className="font-bold text-lg mt-4 text-gray-8">
              팀원이 없습니다.
            </span>
            <p>함께할 팀원들을 구해보아요!</p>
          </div>
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

'use client'

import ProfileAvatar from '@/_components/ProfileAvatar'
import Button from '@/_components/ui/Button'
import { useAcceptMemberWithLeader } from '@/_services/mutations/useAcceptMemberWithLeader'
import { useRejectMemberWithLeader } from '@/_services/mutations/useRejectMemberWithLeader'
import { NotApprovedMemberReturn } from '@/_services/queries/useNotApprovedMember'
import { ConvertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import Link from 'next/link'

interface MemberListProps {
  isLoading: boolean
  data: ConvertSnakeToCamel<NotApprovedMemberReturn[]> | undefined
}

export const MemberList = ({ isLoading, data }: MemberListProps) => {
  return (
    <>
      {isLoading && <div>로딩중...</div>}
      {data && data.length === 0 ? (
        <div>승인 대기 목록이 비어있습니다.</div>
      ) : (
        data && (
          <ul className="flex flex-col gap-1">
            {data.map((item) => (
              <li key={item.id} className="flex w-full justify-between">
                <div className="flex items-center gap-1">
                  <ProfileAvatar
                    imgUrl={item.userInfo.imageUrl}
                    alt="프로필"
                    className="border"
                  />
                  <Link href={`/profile/${item.userInfo.id}`}>
                    {item.userInfo.name}
                  </Link>
                </div>
                <div className="flex gap-1">
                  <AcceptBtn requestId={item.id} />
                  <RejectBtn requestId={item.id} />
                </div>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  )
}

const AcceptBtn = ({ requestId }: { requestId: number }) => {
  const { mutate } = useAcceptMemberWithLeader()

  const handleClickBtn = () => {
    mutate(
      { requestId },
      { onError: (err) => console.log(err), onSuccess: () => alert('성공') },
    )
  }

  return (
    <Button size={'sm'} onClick={handleClickBtn}>
      수락
    </Button>
  )
}

const RejectBtn = ({ requestId }: { requestId: number }) => {
  const { mutate } = useRejectMemberWithLeader()

  const handleClickBtn = () => {
    mutate(
      { requestId },
      {
        onError: () => alert('알 수 없는 에러가 발생하였습니다.'),
        onSuccess: () => alert('성공적입니다.'),
      },
    )
  }

  return (
    <Button size={'sm'} variant={'lined'} onClick={handleClickBtn}>
      거절
    </Button>
  )
}

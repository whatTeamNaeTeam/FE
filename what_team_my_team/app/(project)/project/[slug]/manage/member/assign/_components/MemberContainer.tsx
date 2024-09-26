'use client'

import ProfileAvatar from '@/_components/ProfileAvatar'
import Link from 'next/link'
import Button from '@/_components/ui/Button'
import { useQueryClient } from '@tanstack/react-query'
import NoDataComponent from '@/_components/NoDataComponent'
import { useNotApprovedMember } from '@/_hook/mutations/project/useNotApprovedMember'
import { useAcceptMember } from '@/_hook/mutations/project/useAcceptMember'
import { NOT_APPROVED_MEMBER_KEY } from '@/_constants/queryKey'
import { useRejectMember } from '@/_hook/mutations/project/useRejectMember'

interface MemberContainerProps {
  teamId: string
}

export const MemberContainer = ({ teamId }: MemberContainerProps) => {
  const { data, isLoading } = useNotApprovedMember({ teamId })

  return (
    <>
      {isLoading && <div>로딩중...</div>}
      {data && data.length === 0 ? (
        <NoDataComponent
          img="/assets/stakeholder.png"
          title="승인을 기다리는 인원이 없습니다."
          content="조금 더 기다리면 지원이 마구 올꺼에요 !"
        />
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
                  <AcceptBtn requestId={item.id} teamId={teamId} />
                  <RejectBtn requestId={item.id} teamId={teamId} />
                </div>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  )
}

const AcceptBtn = ({
  requestId,
  teamId,
}: {
  requestId: number
  teamId: string
}) => {
  const queryClient = useQueryClient()
  const { mutate } = useAcceptMember()

  const handleClickBtn = () => {
    mutate(
      { requestId },
      {
        onError: (err) => console.log(err),
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [...NOT_APPROVED_MEMBER_KEY, teamId],
          })
          alert('성공')
        },
      },
    )
  }

  return (
    <Button size={'sm'} onClick={handleClickBtn}>
      수락
    </Button>
  )
}

const RejectBtn = ({
  requestId,
  teamId,
}: {
  requestId: number
  teamId: string
}) => {
  const queryClient = useQueryClient()

  const { mutate } = useRejectMember()
  const handleClickBtn = () => {
    mutate(
      { requestId },
      {
        onError: () => alert('알 수 없는 에러가 발생하였습니다.'),
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [...NOT_APPROVED_MEMBER_KEY, teamId],
          })
          alert('성공적입니다.')
        },
      },
    )
  }

  return (
    <Button size={'sm'} variant={'lined'} onClick={handleClickBtn}>
      거절
    </Button>
  )
}

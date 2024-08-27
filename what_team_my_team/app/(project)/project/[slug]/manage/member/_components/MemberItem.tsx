'use client'

import ProfileAvatar from '@/_components/ProfileAvatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@/_components/ui/DropdownMenu'
import { useBanMemberFromProject } from '@/_services/mutations/useBanMemberFromProject'
import { Member } from '@/_services/queries/useMyTeamDetail'
import { userState } from '@/_stores/atoms/user'
import { ConvertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useAtomValue } from 'jotai'
import React from 'react'
import { FaEllipsisV, FaTrash } from 'react-icons/fa'

interface MemberItemProps {
  teamId: string
  memberData: ConvertSnakeToCamel<Member>
  leaderId: number
}

const MemberItem = ({ teamId, memberData, leaderId }: MemberItemProps) => {
  const user = useAtomValue(userState)

  const isLeader = leaderId === user?.id

  return (
    <li className="flex flex-col bg-white min-w-[220px] px-4 py-4 rounded-lg border hover:shadow-lg transition-all">
      <div className="relative">
        <ProfileAvatar
          imgUrl={memberData.imageUrl}
          alt="프로필"
          rounded={'rect'}
          size={'large'}
        />
        {isLeader && (
          <MemberManageDropdown teamId={teamId} userId={memberData.id} />
        )}
      </div>
      <div className="flex flex-col">
        <span>
          <span className="font-bold mr-1">{memberData.name}</span>
          <span className="text-xs text-gray-6">{memberData.studentNum}</span>
        </span>
        <span className="text-sm font-light">{memberData.position}</span>
      </div>
      <div className="border-t-2 rounded-sm my-2"></div>
      <div>
        <h5 className="text-sm font-bold">역할</h5>
        <span className="text-sm">{memberData.category}</span>
      </div>
    </li>
  )
}

interface MemberManageDropdownProps {
  teamId: string
  userId: number
}

const MemberManageDropdown = ({
  teamId,
  userId,
}: MemberManageDropdownProps) => {
  const { mutate } = useBanMemberFromProject()
  const handleBanMember = () => {
    mutate(
      { teamId, userId },
      {
        onError: (err) => console.log(err),
        onSuccess: () => console.log('success'),
      },
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="absolute top-0 right-0">
          <FaEllipsisV className="text-gray-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleBanMember}>
            <button className="flex items-center gap-1 text-red-6">
              <FaTrash />
              <span>삭제</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

export default MemberItem

'use client'

import Button from '@/_components/ui/Button'
import { cn } from '@/_lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import LeaveTeamConfirmDialog from './LeaveTeamConfirmDialog'
import { useSetAtom } from 'jotai'
import {
  deleteTeamDialogAtom,
  leaveTeamDialogAtom,
} from '@/_stores/atoms/dialog'
import DeleteTeamConfirmDialog from './DeleteTeamConfirmDialog'
import { useCheckLeader } from '@/_hook/queries/project/useCheckLeader'

interface ManageNavigationProps {
  teamId: string
}

export const ManageNavigation = ({ teamId }: ManageNavigationProps) => {
  const [isLeader, setIsLeader] = useState(false)
  const { data } = useCheckLeader({ teamId })
  const pathname = usePathname()
  const segments = pathname.split('/')

  const path = segments[segments.length - 1]

  useEffect(() => {
    if (data) {
      setIsLeader(data.isLeader)
    }
  }, [data])

  const navigationButtons = [
    {
      path: `/project/${teamId}/manage/member`,
      text: '팀원',
      id: 'member',
    },
    {
      path: `/project/${teamId}/manage/member/assign`,
      text: '팀원 승인',
      id: 'assign',
      forLeader: true,
    },
  ]

  return (
    <header className="flex justify-center w-full px-2 lg:px-0">
      <nav className="flex justify-between items-center w-full max-w-[1048px] border-gray-4 border px-4 rounded-lg mb-4">
        <ul className="flex gap-4">
          {navigationButtons.map((item) => (
            <Link href={item.path} key={item.id}>
              <button
                className={cn(
                  'text-gray-6 text-sm h-12 box-content relative',
                  { hidden: item.forLeader && !isLeader },
                  {
                    'text-black font-bold': item.id === path,
                  },
                  'hover:text-black',
                )}
              >
                {item.text}
                <div
                  className={cn('absolute w-full bottom-0', {
                    'border-b-4 border-indigo-6': item.id === path,
                  })}
                ></div>
              </button>
            </Link>
          ))}
        </ul>
        {isLeader ? <DeleteTeamButton /> : <LeaveTeamButton />}
      </nav>
      <DeleteTeamConfirmDialog teamId={teamId} />
      <LeaveTeamConfirmDialog teamId={teamId} />
    </header>
  )
}

const DeleteTeamButton = () => {
  const setIsOpen = useSetAtom(deleteTeamDialogAtom)
  const handleClickDeleteTeam = () => {
    setIsOpen(true)
  }

  return (
    <Button variant={'lined'} size={'sm'} onClick={handleClickDeleteTeam}>
      팀 해체
    </Button>
  )
}

const LeaveTeamButton = () => {
  const setIsOpen = useSetAtom(leaveTeamDialogAtom)
  const handleClickLeaveBtn = () => {
    setIsOpen(true)
  }

  return (
    <Button variant={'lined'} size={'sm'} onClick={handleClickLeaveBtn}>
      팀 탈퇴
    </Button>
  )
}

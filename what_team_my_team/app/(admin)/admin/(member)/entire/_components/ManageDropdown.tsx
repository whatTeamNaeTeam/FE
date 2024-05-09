'use client'

import React from 'react'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/_components/ui/DropdownMenu'
import { IoIosMore } from 'react-icons/io'
import Button from '@/_components/ui/Button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/_components/ui/AlertDialog'
import useDeleteMember from '@/_services/mutations/useDeleteMember'
import useEntireMemberList from '@/_services/queries/useEntireMemberList'

interface ManageDropdownProps {
  userId: string
}

const ManageDropdown = ({ userId }: ManageDropdownProps) => {
  const { mutate } = useDeleteMember()
  const { refetch } = useEntireMemberList()
  const handleDelete = () => {
    mutate(userId, {
      onSuccess: () => {
        refetch()
      },
      onError: () => {
        alert('오류가 발생하였습니다.')
      },
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={'icon'}
          className="bg-inherit outline-none hover:bg-inherit p-2 w-auto h-auto"
        >
          <IoIosMore className="text-gray-8 w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <DropdownMenuItem
              onSelect={(event) => {
                event.preventDefault()
              }}
              colorType="danger"
            >
              탈퇴
            </DropdownMenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent size={'sm'}>
            <AlertDialogTitle position="center">
              정말로 탈퇴처리 하시겠습니까?
            </AlertDialogTitle>
            <div className="flex gap-4 justify-center">
              <AlertDialogAction asChild>
                <Button onClick={handleDelete}>확인</Button>
              </AlertDialogAction>
              <AlertDialogCancel asChild>
                <Button variant={'lined'}>취소</Button>
              </AlertDialogCancel>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ManageDropdown

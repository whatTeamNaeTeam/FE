'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogPortal,
} from '@/_components/ui/AlertDialog'
import Button from '@/_components/ui/Button'
import { useLeaveTeam } from '@/_hook/mutations/project/useLeaveTeam'
import { leaveTeamDialogAtom } from '@/_stores/atoms/dialog'
import { useAtom } from 'jotai'

interface LeaveTeamConfirmDialogProps {
  teamId: string
}

const LeaveTeamConfirmDialog = ({ teamId }: LeaveTeamConfirmDialogProps) => {
  const [isOpen, setIsOpen] = useAtom(leaveTeamDialogAtom)
  const { mutate } = useLeaveTeam()
  const handleActionBtn = () => {
    mutate({ teamId }, { onSuccess: () => console.log('success') })
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogPortal>
        <AlertDialogContent>
          <h3 className="text-lg">정말로 팀을 탈퇴하시겠습니까?</h3>
          <p className="text-gray-6 text-sm">
            팀을 탈퇴한 후에는 되돌릴 수 없습니다. 신중하게 선택해주세요.
          </p>
          <div className="flex w-full justify-center gap-2">
            <AlertDialogAction asChild onClick={handleActionBtn}>
              <Button variant={'lined'}>확인</Button>
            </AlertDialogAction>
            <AlertDialogCancel asChild>
              <Button>취소</Button>
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  )
}

export default LeaveTeamConfirmDialog

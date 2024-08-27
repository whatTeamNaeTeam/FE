'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogPortal,
} from '@/_components/ui/AlertDialog'
import Button from '@/_components/ui/Button'
import { useDeleteTeamWithLeader } from '@/_services/mutations/useDeleteTeamWithLeader'
import { deleteTeamDialogAtom } from '@/_stores/atoms/dialog'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'

interface DeleteTeamConfirmDialogProps {
  teamId: string
}

const DeleteTeamConfirmDialog = ({ teamId }: DeleteTeamConfirmDialogProps) => {
  const [isOpen, setIsOpen] = useAtom(deleteTeamDialogAtom)
  const router = useRouter()
  const { mutate } = useDeleteTeamWithLeader()

  const handleActionBtn = () => {
    mutate(
      { teamId },
      {
        onSuccess: () => {
          alert('팀이 해체되었습니다.')
          router.push('/')
        },
        onError: (error) => console.log(error),
      },
    )
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogPortal>
        <AlertDialogContent>
          <h3 className="text-lg">정말로 팀을 해체하시겠습니까?</h3>
          <p className="text-gray-6 text-sm">
            팀을 해체한 후에는 되돌릴 수 없습니다. 신중하게 선택해주세요.
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

export default DeleteTeamConfirmDialog

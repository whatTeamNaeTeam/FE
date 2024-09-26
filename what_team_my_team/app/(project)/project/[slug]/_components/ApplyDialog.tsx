'use client'

import Button from '@/_components/ui/Button'
import DialogContent from '@/_components/ui/Dialog/Content'
import DialogOverlay from '@/_components/ui/Dialog/Overlay'
import DialogPortal from '@/_components/ui/Dialog/Portal'
import Dialog from '@/_components/ui/Dialog/Root'
import { PROJECT_DETAIL_KEY } from '@/_constants/queryKey'
import { useApplyProject } from '@/_hook/mutations/project/useApplyProject'
import { applyDialogAtom } from '@/_stores/atoms/dialog'
import { selectedPositionIdAtom } from '@/_stores/atoms/position'
import { getQueryClient } from '@/app/getQueryClient'
import { useAtom } from 'jotai'
import React from 'react'
import { SubmitHandler, useController, useForm } from 'react-hook-form'

interface ApplyDialogProps {
  teamId: string
}
interface ApplyFormValueType {
  content: string
}

export function ApplyDialog({ teamId }: ApplyDialogProps) {
  const queryClient = getQueryClient()
  const [open, setOpen] = useAtom(applyDialogAtom)
  const [selectedPositionId, setSelectedPositionId] = useAtom(
    selectedPositionIdAtom,
  )
  const { handleSubmit, control } = useForm<ApplyFormValueType>()
  const { field } = useController({
    name: 'content',
    control,
    rules: { required: '3자 이상 입력해주세요.' },
  })
  const { mutate, isPending } = useApplyProject()

  const onSubmit: SubmitHandler<ApplyFormValueType> = (data) => {
    const { content } = data

    if (!selectedPositionId) {
      return
    }

    mutate(
      { content, categoryId: selectedPositionId },
      {
        onSettled: () => {
          setOpen(false)
          setSelectedPositionId(null)
        },
        onSuccess: () => {
          alert('성공적으로 지원되었습니다.')
          queryClient.invalidateQueries({
            queryKey: [...PROJECT_DETAIL_KEY, teamId],
          })
        },
      },
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center"
          >
            <div className="mb-2">
              <p className="mb-2">
                간단한 자기소개나 각오와 함께 지원할 수 있어요 !
              </p>
              <textarea
                className="w-full resize-none border border-gray-6 rounded-sm p-1 outline-indigo-6"
                value={field.value}
                onChange={field.onChange}
                ref={field.ref}
              />
            </div>
            <Button type="submit" disabled={!!isPending}>
              지원하기
            </Button>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

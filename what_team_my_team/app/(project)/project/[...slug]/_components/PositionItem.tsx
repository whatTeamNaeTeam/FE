'use client'

import Button from '@/_components/ui/Button'
import { Tech } from '@/_services/queries/useProjectDetail'
import { applyDialogAtom } from '@/_stores/atoms/dialog'
import { useSetAtom } from 'jotai'
import React from 'react'

interface PositionItemProps {
  position: Tech
}

const PositionItem = ({ position }: PositionItemProps) => {
  const setOpen = useSetAtom(applyDialogAtom)

  const handleDialogState = () => {
    setOpen(true)
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-indigo-6">개발</span>
        <span className="text-sm font-medium">{position.tech}</span>
        <div className="flex text-xs text-gray-6 gap-2">
          <span>현원 {position.currentNum}</span>
          <span>총원 {position.needNum}</span>
        </div>
      </div>
      <Button className="h-9" onClick={handleDialogState}>
        지원
      </Button>
    </div>
  )
}

export default PositionItem

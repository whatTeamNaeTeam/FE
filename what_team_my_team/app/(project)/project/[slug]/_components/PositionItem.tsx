'use client'

import Button from '@/_components/ui/Button'
import { ConvertedGetProjectDetailReturn } from '@/_services/type'
import { applyDialogAtom } from '@/_stores/atoms/dialog'
import { selectedPositionIdAtom } from '@/_stores/atoms/position'
import { useSetAtom } from 'jotai'
import React from 'react'

interface PositionItemProps {
  position: ConvertedGetProjectDetailReturn['team']['category'][number]
}

export function PositionItem({ position }: PositionItemProps) {
  const setOpen = useSetAtom(applyDialogAtom)
  const setSelectedPositionId = useSetAtom(selectedPositionIdAtom)

  const handleDialogState = () => {
    setOpen(true)
    setSelectedPositionId(position.id)
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
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

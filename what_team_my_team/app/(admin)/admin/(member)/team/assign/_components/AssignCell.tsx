'use client'

import Button from '@/_components/ui/Button'
import useMemberAccept from '@/_services/mutations/useMemberAccept'
import useMemberReject from '@/_services/mutations/useMemberReject'
import { AssignTableCellProps } from '@/_types/table'

const AssignCell = ({ row, table, getValue }: AssignTableCellProps) => {
  const meta = table?.options.meta
  const userId = getValue()
  const memberAcceptMutation = useMemberAccept()
  const memberRejectMutation = useMemberReject()

  const removeRow = () => {
    // @ts-expect-error there is removeRow
    meta && meta.removeRow(row.index)
  }

  const handleAccept = () => {
    memberAcceptMutation.mutate(userId as number, {
      onSuccess: () => {
        console.log('success')
        removeRow()
      },
    })
  }

  const handleReject = () => {
    memberRejectMutation.mutate(userId as number, {
      onSuccess: () => {
        console.log('success')
        removeRow()
      },
    })
  }

  return (
    <div className="flex gap-2">
      <Button type="button" size={'sm'} onClick={handleAccept}>
        수락
      </Button>
      <Button
        type="button"
        variant={'lined'}
        size={'sm'}
        onClick={handleReject}
      >
        거절
      </Button>
    </div>
  )
}

export default AssignCell

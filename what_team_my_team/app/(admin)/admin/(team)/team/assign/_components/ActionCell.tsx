'use client'

import Button from '@/_components/ui/Button'
import useTeamAccept from '@/_services/mutations/useTeamAccept'
import useTeamReject from '@/_services/mutations/useTeamReject'
import { TeamAssignCamel, TeamAssignTableCellProps } from '@/_types/table'

const ActionCell = ({
  row,
  table,
  getValue,
}: TeamAssignTableCellProps<TeamAssignCamel>) => {
  const meta = table?.options.meta
  const userId = getValue().toString()

  const teamAcceptMutation = useTeamAccept()
  const teamRejectMutation = useTeamReject()

  const removeRow = () => {
    // @ts-expect-error there is removeRow
    meta && meta.removeRow(row.index)
  }

  const handleAccept = () => {
    teamAcceptMutation.mutate(userId, {
      onSuccess: () => {
        removeRow()
      },
    })
  }

  const handleReject = () => {
    teamRejectMutation.mutate(userId, {
      onSuccess: () => {
        removeRow()
      },
    })
  }

  return (
    <div className="flex justify-center gap-2">
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

export default ActionCell

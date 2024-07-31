'use client'

import Button from '@/_components/ui/Button'
import useDeleteTeam from '@/_services/mutations/useDeleteTeam'
import useEntireTeamList from '@/_services/queries/useEntireTeamList'
import { pageAtom } from '@/_stores/atoms/page'
import { TeamAssignCamel } from '@/_types/table'
import { Table } from '@tanstack/react-table'
import { useAtomValue } from 'jotai'
import React from 'react'

interface FooterCellProps {
  table: Table<TeamAssignCamel>
}

const FooterCell = ({ table }: FooterCellProps) => {
  const page = useAtomValue(pageAtom)
  const selectedRows = table.getSelectedRowModel().rows
  const { mutate } = useDeleteTeam()
  const { refetch } = useEntireTeamList({ pageNum: page })

  const handleDeleteTeam = () => {
    const idString = selectedRows.map((row) => row.original.id).join(',')

    mutate(idString, {
      onSuccess: () => {
        refetch()
        table.resetRowSelection(false)
      },
    })
  }

  return (
    <tfoot>
      <tr>
        <th colSpan={table.getCenterLeafColumns().length} align="right">
          {selectedRows.length > 0 && (
            <div className="pt-2">
              <Button size={'sm'} onClick={handleDeleteTeam}>
                선택삭제
              </Button>
            </div>
          )}
        </th>
      </tr>
    </tfoot>
  )
}

export default FooterCell

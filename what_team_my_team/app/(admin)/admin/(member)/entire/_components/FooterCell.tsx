'use client'

import Button from '@/_components/ui/Button'
import useDeleteMember from '@/_services/mutations/useDeleteMember'
import useEntireMemberList from '@/_services/queries/useEntireMemberList'
import { EntireData } from '@/_types/table'
import { Table } from '@tanstack/react-table'
import React from 'react'

interface FooterCellProps {
  table: Table<EntireData>
}

const FooterCell = ({ table }: FooterCellProps) => {
  const selectedRows = table.getSelectedRowModel().rows
  const { mutate } = useDeleteMember()
  const { refetch } = useEntireMemberList()

  const handleDeleteMembers = () => {
    const idString = selectedRows.map((row) => row.original.id).join(',')
    mutate(idString, {
      onSuccess: () => {
        refetch()
      },
    })
  }

  return (
    <tfoot>
      <tr>
        <th colSpan={table.getCenterLeafColumns().length} align="right">
          {selectedRows.length > 0 && (
            <div className="pt-2">
              <Button onClick={handleDeleteMembers}>선택탈퇴</Button>
            </div>
          )}
        </th>
      </tr>
    </tfoot>
  )
}

export default FooterCell

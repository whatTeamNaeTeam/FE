'use client'

import React, { useEffect, useState } from 'react'
import { ReactTable } from '@/_components/ui/ReactTable'
import useTable from '@/_hook/useTable'
import { TableCell } from '@/_components/ui/ReactTable'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { TeamAssignCamel } from '@/_types/table'
import ActionCell from './ActionCell'
import ProfileAvatar from '@/_components/ProfileAvatar'

interface AssignTableProps {
  data: TeamAssignCamel[]
}

const columnHelper = createColumnHelper<TeamAssignCamel>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const assignTableColumns: ColumnDef<TeamAssignCamel, any>[] = [
  columnHelper.accessor('title', {
    header: '제목',
    size: 200,
  }),
  columnHelper.accessor('leaderInfo', {
    header: '팀장',
    cell: ({ row }) => {
      const leaderName = row.original.leaderInfo.name
      const leaderAvatar = row.original.leaderInfo.imageUrl
      return (
        <div className="flex items-center justify-center gap-2 w-full">
          <ProfileAvatar
            size={'small'}
            imgUrl={leaderAvatar}
            alt={leaderName}
          />
          <span>{leaderName}</span>
        </div>
      )
    },
    size: 40,
  }),
  columnHelper.accessor('createdAt', {
    header: '신청날짜',
    size: 60,
  }),
  columnHelper.accessor('genre', {
    header: '유형',
    size: 60,
  }),
  columnHelper.display({
    id: 'actions',
    header: '',
    cell: ActionCell,
    enableSorting: false,
    size: 20,
  }),
]

const AssignTable = ({ data }: AssignTableProps) => {
  const [count, setCount] = useState(data.length)
  const table = useTable({
    columns: assignTableColumns,
    tableData: data,
  })

  useEffect(() => {
    setCount(table.getRowCount())
  }, [table.getRowCount()])

  return (
    <div className="w-full p-4 bg-white border-gray-6 shadow-md">
      <span>
        대기인원 <span className="text-indigo-4">{count ?? 0}</span>명
      </span>
      <ReactTable table={table} />
    </div>
  )
}

export default AssignTable

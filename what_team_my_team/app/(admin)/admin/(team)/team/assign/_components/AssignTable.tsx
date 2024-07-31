'use client'

import React, { useEffect, useState } from 'react'
import { ReactTable } from '@/_components/ui/ReactTable'
import useTable from '@/_hook/useTable'
import { TableCell } from '@/_components/ui/ReactTable'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { TeamAssignCamel } from '@/_types/table'
import AssignCell from './AssignCell'

interface AssignTableProps {
  data: TeamAssignCamel[]
}

const columnHelper = createColumnHelper<TeamAssignCamel>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const assignTableColumns: ColumnDef<TeamAssignCamel, any>[] = [
  columnHelper.accessor('title', {
    header: '제목',
    cell: TableCell,
    size: 100,
  }),
  columnHelper.accessor('createdAt', {
    header: '신청날짜',
    cell: TableCell,
    size: 100,
  }),
  columnHelper.accessor('genre', {
    header: '유형',
    cell: TableCell,
    size: 120,
  }),
  columnHelper.accessor('id', {
    header: '',
    cell: AssignCell,
    enableSorting: false,
    size: 100,
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

'use client'

import React from 'react'
import { ReactTable } from '@/_components/ui/ReactTable'
import useTable from '@/_hook/useTable'
import { TableCell } from '@/_components/ui/ReactTable'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { AssignData } from '@/_types/table'
import AssignCell from './AssignCell'
import { SelectedAssignMember } from '@/_services/queries/useAssignMemberList'

interface AssignTableProps {
  data: SelectedAssignMember[]
}

const columnHelper = createColumnHelper<AssignData>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const assignTableColumns: ColumnDef<AssignData, any>[] = [
  columnHelper.accessor('name', {
    header: '이름',
    cell: TableCell,
    size: 100,
  }),
  columnHelper.accessor('studentNum', {
    header: '학번',
    cell: TableCell,
    size: 100,
  }),
  columnHelper.accessor('createdAt', {
    header: '신청날짜',
    cell: TableCell,
    size: 100,
  }),
  columnHelper.accessor('id', {
    header: '',
    cell: AssignCell,
    enableSorting: false,
    size: 120,
  }),
]

const AssignTable = ({ data }: AssignTableProps) => {
  const table = useTable({
    columns: assignTableColumns,
    tableData: data,
  })

  return (
    <div className="w-full p-4 bg-white border-gray-6 shadow-md">
      <span>
        대기인원 <span className="text-indigo-4">{data.length ?? 0}</span>명
      </span>
      <ReactTable table={table} />
    </div>
  )
}

export default AssignTable

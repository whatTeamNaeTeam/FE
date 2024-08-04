'use client'

import React from 'react'
import {
  IndeterminateCheckBox,
  ReactTable,
  TableCell,
} from '@/_components/ui/ReactTable'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { TeamAssignCamel } from '@/_types/table'
import ActionCell from './ActionCell'
import useTable from '@/_hook/useTable'
import SearchForm from './SearchForm'
import FooterCell from './FooterCell'

interface EntireTableProps {
  count: number
  data: TeamAssignCamel[]
}

const columnHelper = createColumnHelper<TeamAssignCamel>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const entireTableColumns: ColumnDef<TeamAssignCamel, any>[] = [
  columnHelper.display({
    id: 'check',
    header: ({ table }) => {
      return (
        <IndeterminateCheckBox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      )
    },
    cell: ({ row }) => {
      return (
        <IndeterminateCheckBox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      )
    },
    size: 20,
  }),
  columnHelper.accessor(`title`, {
    header: '제목',
    cell: TableCell,
    size: 120,
  }),
  columnHelper.accessor('genre', {
    header: '분야',
    cell: TableCell,
    size: 40,
  }),
  columnHelper.accessor('createdAt', {
    header: '생성일',
    cell: TableCell,
    size: 60,
  }),
  columnHelper.display({
    id: 'actions',
    cell: ActionCell,
    size: 20,
    enableSorting: false,
  }),
]

const EntireTable = ({ data, count }: EntireTableProps) => {
  const table = useTable({
    columns: entireTableColumns,
    tableData:
      data ??
      new Array(4).fill('').map((el, idx) => ({
        id: idx,
        title: '',
        genre: '',
        createdAt: '',
      })),
  })

  return (
    <div className="flex flex-col gap-4">
      <SearchForm />
      <div className="w-full p-4 bg-white border-gray-6 shadow-md">
        <span>
          {'전체 프로젝트 '}
          <span className="text-indigo-4">{count ?? 0}</span>개
        </span>
        <ReactTable table={table} footer={<FooterCell table={table} />} />
      </div>
    </div>
  )
}

export default EntireTable

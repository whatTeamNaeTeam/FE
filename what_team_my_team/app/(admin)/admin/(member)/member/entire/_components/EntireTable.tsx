'use client'

import React from 'react'
import {
  IndeterminateCheckBox,
  ReactTable,
  TableCell,
} from '@/_components/ui/ReactTable'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { EntireData } from '@/_types/table'
import ActionCell from './ActionCell'
import useTable from '@/_hook/useTable'
import { SelectedEntireMember } from '@/_services/queries/useEntireMemberList'
import SearchForm from './SearchForm'
import FooterCell from './FooterCell'

interface EntireTableProps {
  data: SelectedEntireMember
}

const columnHelper = createColumnHelper<EntireData>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const entireTableColumns: ColumnDef<EntireData, any>[] = [
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
  }),
  columnHelper.accessor(`name`, {
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
    header: '가입일',
    cell: TableCell,
    size: 100,
  }),
  columnHelper.display({
    id: 'actions',
    cell: ActionCell,
    enableSorting: false,
  }),
]

const EntireTable = ({ data }: EntireTableProps) => {
  const table = useTable({
    columns: entireTableColumns,
    tableData: data.results,
  })

  return (
    <div className="flex flex-col gap-4">
      <SearchForm />
      <div className="w-full p-4 bg-white border-gray-6 shadow-md">
        <span>
          {'전체인원 '}
          <span className="text-indigo-4">{data.totalCount ?? 0}</span>명
        </span>
        <ReactTable table={table} footer={<FooterCell table={table} />} />
      </div>
    </div>
  )
}

export default EntireTable

'use client'

import React, { useEffect, useState } from 'react'
import AssignTable from './AssignTable'
import Button from '@/_components/ui/Button'
import useAssignMemberList, {
  SelectedAssignMember,
} from '@/_services/queries/useAssignMemberList'
import {
  ColumnDef,
  Row,
  Table,
  createColumnHelper,
} from '@tanstack/react-table'
import useMemberAccept from '@/_services/mutations/useMemberAccept'
import useMemberReject from '@/_services/mutations/useMemberReject'

export interface AssignData extends SelectedAssignMember {}

const columnHelper = createColumnHelper<AssignData>()

interface TableCellProps {
  getValue: () => string | number
}
interface AssignCellProps<T> {
  row: Row<T>
  table: Table<T>
  getValue: () => number
}

export const TableCell = ({ getValue }: TableCellProps) => {
  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <span>{value}</span>
}

export const AssignCell = ({
  row,
  table,
  getValue,
}: AssignCellProps<AssignData>) => {
  const meta = table.options.meta
  const userId = getValue()
  const memberAcceptMutation = useMemberAccept()
  const memberRejectMutation = useMemberReject()

  const removeRow = () => {
    // @ts-expect-error there is removeRow
    meta && meta.removeRow(row.index)
  }

  const handleAccept = () => {
    memberAcceptMutation.mutate(userId, {
      onSuccess: () => {
        console.log('success')
        removeRow()
      },
    })
  }

  const handleReject = () => {
    memberRejectMutation.mutate(userId, {
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

const TableContainer = () => {
  const { data, isLoading } = useAssignMemberList()

  return (
    <>
      {isLoading && <div>...불러오는중...</div>}
      {data && <AssignTable tableData={data} columns={assignTableColumns} />}
    </>
  )
}

export default TableContainer

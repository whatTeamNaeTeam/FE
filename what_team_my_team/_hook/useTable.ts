import { TableType } from '@/_types/table'
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'

interface UseTableProps<T> {
  columns: ColumnDef<T, unknown>[]
  tableData: T[]
}

const useTable = <T extends TableType>({
  columns,
  tableData,
}: UseTableProps<T>) => {
  const [data, setData] = useState<T[]>(() => [...tableData])

  useEffect(() => {
    setData(tableData)
  }, [tableData])

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableRowSelection: true,
    debugTable: true,
    meta: {
      removeRow: (rowIndex: number) => {
        const setFilterFunc = (old: T[]) =>
          old.filter((_row: T, index: number) => index !== rowIndex)
        setData(setFilterFunc)
      },
      removeSelectedRows: (selectedRows: number[]) => {
        const setFilterFunc = (old: T[]) =>
          old.filter((_row, idx) => {
            !selectedRows.includes(idx)
          })
        setData(setFilterFunc)
      },
    },
  })

  return table
}

export default useTable

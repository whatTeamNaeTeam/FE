'use client'

import React, { useEffect, useState } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'
import { AssignData } from './TableContainer'

interface ReactTableProps<T> {
  tableData: T[]
  columns: ColumnDef<T, unknown>[]
}

const AssignTable = ({ tableData, columns }: ReactTableProps<AssignData>) => {
  const [data, setData] = useState<AssignData[]>(() => [...tableData])

  useEffect(() => {
    setData(tableData)
  }, [tableData])

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    meta: {
      removeRow: (rowIndex: number) => {
        const setFilterFunc = (old: AssignData[]) =>
          old.filter((_row: AssignData, index: number) => index !== rowIndex)
        setData(setFilterFunc)
      },
    },
  })

  return (
    <div className="w-full p-10 bg-white border-gray-6 shadow-md">
      <span>
        대기인원 <span className="text-indigo-4">{data.length ?? 0}</span>명
      </span>
      <table className="w-full">
        <thead className="h-12 border-b-2">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    width: header.getSize(),
                    cursor: header.column.getCanSort() ? 'pointer' : 'default',
                  }}
                  onClick={header.column.getToggleSortingHandler()}
                  className="text-gray-6"
                >
                  <div className="flex justify-center items-center gap-2">
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    )}
                    <div className="items-center">
                      {
                        {
                          asc: <FaSortUp />,
                          desc: <FaSortDown />,
                        }[(header.column.getIsSorted() as string) ?? null]
                      }
                      {header.column.getCanSort() &&
                      !header.column.getIsSorted() ? (
                        <FaSort />
                      ) : null}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="h-12 hover:bg-gray-2">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AssignTable

'use client'

import { TableCellProps, TableType } from '@/_types/table'
import { Table, flexRender } from '@tanstack/react-table'
import React, { HTMLProps, useEffect, useRef, useState } from 'react'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'

interface TableProps<T> {
  table: Table<T>
  footer?: React.ReactNode
}

const TableCell = ({ getValue }: TableCellProps) => {
  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <span>{value}</span>
}

const IndeterminateCheckBox = ({
  indeterminate,
  className,
  ...props
}: { indeterminate: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    typeof indeterminate === 'boolean'
    ref.current.indeterminate = !props.checked && indeterminate
  }, [ref, indeterminate])

  return <input type="checkbox" ref={ref} className={className} {...props} />
}

const ReactTable = <T extends TableType>({ table, footer }: TableProps<T>) => {
  return (
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
        {table.getRowModel().rows.length === 0 && (
          <tr>
            <th colSpan={table.getCenterLeafColumns().length} align="center">
              <div className="py-40">더이상 불러올 데이터가 없습니다.</div>
            </th>
          </tr>
        )}
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
      {footer && footer}
    </table>
  )
}

export { ReactTable, TableCell, IndeterminateCheckBox }

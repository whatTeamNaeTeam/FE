'use client'

import React from 'react'
import ManageDropdown from './ManageDropdown'
import { Row } from '@tanstack/react-table'
import { EntireData } from '@/_types/table'

interface ActionCellProps {
  row: Row<EntireData>
}

const ManageCell = ({ row }: ActionCellProps) => {
  const userId = row.original.id.toString()

  return (
    <div className="flex justify-center">
      <ManageDropdown userId={userId} />
    </div>
  )
}

export default ManageCell

'use client'

import React from 'react'
import ManageDropdown from './ManageDropdown'
import { Row } from '@tanstack/react-table'
import { TeamAssignCamel } from '@/_types/table'

interface ManageCellProps {
  row: Row<TeamAssignCamel>
}

const ManageCell = ({ row }: ManageCellProps) => {
  const userId = row.original.id.toString()

  return (
    <div className="flex justify-center">
      <ManageDropdown userId={userId} />
    </div>
  )
}

export default ManageCell

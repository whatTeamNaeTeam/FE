'use client'

import React from 'react'
import ManageDropdown from './ManageDropdown'
import { ManageTableCellProps } from '@/_types/table'

const ManageCell = ({ getValue }: ManageTableCellProps) => {
  const userId = getValue().toString()

  return (
    <div className="flex justify-center">
      <ManageDropdown userId={userId} />
    </div>
  )
}

export default ManageCell

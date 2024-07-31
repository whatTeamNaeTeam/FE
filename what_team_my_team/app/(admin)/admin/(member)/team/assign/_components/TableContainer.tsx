'use client'

import React, { useEffect, useState } from 'react'

import useAssignMemberList, {
  SelectedAssignMember,
} from '@/_services/queries/useAssignMemberList'
import AssignTable from './AssignTable'
import TableLoader from '@/_components/TableLoader'

const TableContainer = () => {
  const { data, isLoading } = useAssignMemberList()
  const [tableData, setTableData] = useState<
    SelectedAssignMember[] | undefined
  >()

  useEffect(() => {
    setTableData(data)
  }, [data])

  return (
    <>
      {isLoading && <TableLoader />}
      {tableData && <AssignTable data={tableData} />}
    </>
  )
}

export default TableContainer

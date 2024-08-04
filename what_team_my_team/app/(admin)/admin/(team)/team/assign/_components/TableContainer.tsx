'use client'

import React, { useEffect, useState } from 'react'

import AssignTable from './AssignTable'
import TableLoader from '@/_components/TableLoader'
import useAssignTeamList from '@/_services/queries/useAssignTeamList'
import { TeamAssignCamel } from '@/_types/table'

const TableContainer = () => {
  const { data, isLoading } = useAssignTeamList()
  const [tableData, setTableData] = useState<TeamAssignCamel[] | undefined>()

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

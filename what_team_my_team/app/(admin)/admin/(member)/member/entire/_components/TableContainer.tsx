'use client'

import React, { useEffect, useState } from 'react'

import useEntireMemberList, {
  SelectedEntireMember,
} from '@/_services/queries/useEntireMemberList'
import EntireTable from './EntireTable'
import TableLoader from '@/_components/TableLoader'

const TableContainer = () => {
  const { data, isLoading } = useEntireMemberList()
  const [tableData, setTableData] = useState<SelectedEntireMember | undefined>()

  useEffect(() => {
    setTableData(data)
  }, [data])

  return (
    <>
      {isLoading && <TableLoader />}
      {tableData && <EntireTable data={tableData} />}
    </>
  )
}

export default TableContainer

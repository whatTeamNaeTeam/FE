'use client'

import React, { useEffect, useState } from 'react'
import EntireTable from './EntireTable'
import TableLoader from '@/_components/TableLoader'
import useEntireTeamList from '@/_services/queries/useEntireTeamList'
import { TeamAssignCamel } from '@/_types/table'
import Pagination from '@/_components/Pagination'
import { useAtom } from 'jotai'
import { pageAtom } from '@/_stores/atoms/page'

const TableContainer = () => {
  const [page, setPage] = useAtom<number>(pageAtom)
  const [isNext, setIsNext] = useState<boolean>(false)
  const [isPrev, setIsPrev] = useState<boolean>(false)
  const [dataLength, setDataLength] = useState<number>(0)
  const [tableData, setTableData] = useState<TeamAssignCamel[] | undefined>()

  const { data, isLoading } = useEntireTeamList({ pageNum: page })

  useEffect(() => {
    if (data) {
      setTableData(data.results)
      setIsNext(!!data.next)
      setIsPrev(!!data.previous)
      setDataLength(data.count)
    }
  }, [data])

  return (
    <>
      {isLoading && <TableLoader />}
      {tableData && (
        <div className="flex flex-col gap-2">
          <EntireTable count={data?.count ?? 0} data={tableData} />
          <Pagination
            page={page}
            setPage={setPage}
            isNext={isNext}
            isPrev={isPrev}
            dataLength={dataLength}
            itemPerPage={10}
          />
        </div>
      )}
    </>
  )
}

export default TableContainer

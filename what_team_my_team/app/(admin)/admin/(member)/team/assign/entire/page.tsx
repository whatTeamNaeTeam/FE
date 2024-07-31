import React from 'react'
import TableContainer from './_components/TableContainer'

const page = () => {
  return (
    <div className="w-full bg-gray-2">
      <h5 className="bg-white text-lg p-4 shadow-sm mb-8">멤버 목록</h5>
      <div className="p-8">
        <TableContainer />
      </div>
    </div>
  )
}

export default page

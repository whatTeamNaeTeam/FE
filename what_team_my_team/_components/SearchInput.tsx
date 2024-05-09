import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2 bg-white shadow-sm px-2 py-3">
      <CiSearch className=" text-gray-6" />
      <input placeholder="검색" className="w-full outline-none" />
    </div>
  )
}

export default SearchInput

'use client'

import React, { Dispatch } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface PaginationProps {
  page: number
  setPage: Dispatch<React.SetStateAction<number>>
  isNext: boolean
  isPrev: boolean
  dataLength: number
  itemPerPage: number
}

const Pagination = ({
  page,
  setPage,
  isNext,
  isPrev,
  dataLength,
  itemPerPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(dataLength / itemPerPage)

  const handlePageClick = (pageNum: number) => {
    setPage(pageNum)
  }

  const renderPageNumbers = (totalPagesNum: number) => {
    const pageNumbers = []

    if (totalPagesNum <= 5) {
      // 총 페이지 개수가 5개 이하일 때
      for (let i = 1; i <= totalPagesNum; i++) {
        pageNumbers.push(
          <button
            key={`pagination-${i}`}
            onClick={() => handlePageClick(i)}
            className={`rounded-full w-8 h-8 text-sm ${i === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-gray-4'}`}
          >
            {i}
          </button>,
        )
      }
    } else {
      // 총 페이지 개수가 5개 초과일 때
      // 첫 번째 페이지 삽입
      pageNumbers.push(
        <button
          key={`pagination-1`}
          onClick={() => handlePageClick(1)}
          className={`rounded-full w-8 h-8 text-sm ${1 === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-gray-4'}`}
        >
          1
        </button>,
      )

      // 최근 페이지가 3보다 클 때 생략 삽입
      if (page > 3) {
        pageNumbers.push(
          <span key="start-ellipsis" className="px-3 py-1">
            ...
          </span>,
        )
      }

      // 최근 페이지와 근처 페이지 삽입
      const startPage = Math.max(2, page - 2)
      const endPage = Math.min(totalPages - 1, page + 2)

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={`pagination-${i}`}
            onClick={() => handlePageClick(i)}
            className={`rounded-full w-8 h-8 text-sm ${i === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-gray-4'}`}
          >
            {i}
          </button>,
        )
      }

      // 최근 페이지가 전체 페이지 - 2 보다 작을 때 생략 삽입
      if (page < totalPages - 2) {
        pageNumbers.push(
          <span key="end-ellipsis" className="px-3 py-1">
            ...
          </span>,
        )
      }

      // 마지막 페이지 삽입
      pageNumbers.push(
        <button
          key={`pagination-${totalPagesNum}`}
          onClick={() => handlePageClick(totalPages)}
          className={`rounded-full w-8 h-8 text-sm ${totalPages === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-gray-4'}`}
        >
          {totalPages}
        </button>,
      )
    }

    return pageNumbers
  }

  return (
    <div className="flex justify-center gap-2 bg-white px-6 py-2 rounded-3xl">
      <button
        onClick={() => setPage((prev) => prev - 1)}
        disabled={!isPrev}
        className="inline-flex items-center text-sm"
      >
        <FaChevronLeft />
      </button>
      {renderPageNumbers(totalPages)}
      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={!isNext}
        className="inline-flex items-center text-sm"
      >
        <FaChevronRight />
      </button>
    </div>
  )
}

export default Pagination

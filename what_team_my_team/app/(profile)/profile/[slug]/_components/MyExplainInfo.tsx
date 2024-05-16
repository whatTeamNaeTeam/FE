'use client'

import React from 'react'

interface MyExplainInfoProps {
  explain: string
}

const MyExplainInfo = ({ explain }: MyExplainInfoProps) => {
  return (
    <div>
      <h3 className="text-base mb-2">자기 소개</h3>
      <div className="border border-gray-4 rounded-sm py-2 px-2">
        <span className="text-sm">{explain}</span>
      </div>
    </div>
  )
}

export default MyExplainInfo

'use client'

import React from 'react'

interface PositionInfoProps {
  position: string
}

const PositionInfo = ({ position }: PositionInfoProps) => {
  return (
    <div>
      <h3 className="text-base mb-2">주 포지션</h3>
      <div className="border border-gray-4 rounded-sm py-2 px-2">
        <span className="text-sm">{position}</span>
      </div>
    </div>
  )
}

export default PositionInfo

'use client'

import React from 'react'
import PositionItem from './PositionItem'
import { ConvertedCategory } from '@/_types/project'

interface PositionListProps {
  positions: ConvertedCategory[]
}

const PositionList = ({ positions }: PositionListProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">필요 포지션</h3>
      <div className="grid gap-x-4 gap-y-2 grid-col-1 w-full max-w-[660px] border border-gray-4 rounded-md py-3 px-6 md:grid-cols-2">
        {positions.map((position, idx) => (
          <PositionItem key={`${position.id}-${idx}`} position={position} />
        ))}
      </div>
    </div>
  )
}

export default PositionList

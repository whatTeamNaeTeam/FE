'use client'

import React from 'react'

interface TechInfoProps {
  tech: { name: string }[]
}

const TechInfo = ({ tech }: TechInfoProps) => {
  return (
    <div>
      <h3 className="text-base mb-2">기술 스택</h3>
      <ul className="flex gap-1 border border-gray-4 rounded-sm py-2 px-2">
        {tech.length === 0 ? (
          <span>없음</span>
        ) : (
          tech.map(({ name }, idx) => (
            <li
              key={`${name}-${idx}}`}
              className="text-xs bg-gray-4 rounded-sm p-1"
            >
              {name}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default TechInfo

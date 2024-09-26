'use client'

import React from 'react'
import Team from './Team'
import { useMyTeam } from '@/_hook/mutations/project/useMyTeam'

interface ContainerProps {
  userId: string
}

const TeamListContainer = ({ userId }: ContainerProps) => {
  const { data } = useMyTeam({ userId })

  return (
    <div className="w-full">
      {data && (
        <ul className="w-full">
          {data.team.map((item) => (
            <Team item={item} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TeamListContainer

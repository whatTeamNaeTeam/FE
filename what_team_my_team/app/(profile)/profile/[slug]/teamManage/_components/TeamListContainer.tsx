'use client'

import useMyTeam from '@/_services/queries/useMyTeam'
import React from 'react'
import Team from './Team'

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

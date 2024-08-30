'use client'

import React from 'react'
import ProjectTypeSelect from './ProjectTypeSelect'
import { useAtomValue } from 'jotai'
import { projectTypeAtom } from '@/_stores/atoms/select'
import ProceedingContainer from './ProceedingContainer'
import CompletedContainer from './CompletedContainer'

interface ProjectListContainerProps {
  userId: string
}

const ProjectListContainer = ({ userId }: ProjectListContainerProps) => {
  const value = useAtomValue(projectTypeAtom)

  return (
    <div>
      <ProjectTypeSelect />
      {value === 'progress' ? (
        <ProceedingContainer userId={userId} />
      ) : (
        <CompletedContainer userId={userId} />
      )}
    </div>
  )
}

export default ProjectListContainer

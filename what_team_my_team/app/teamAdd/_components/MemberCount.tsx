'use client'

import React from 'react'
import { Control, useController } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'

interface MemberCountProps {
  control: Control<TeamAddFormValueType>
  index: number
}

const MemberCount = ({ control, index }: MemberCountProps) => {
  const { field } = useController({
    name: `category.${index}.memberCount`,
    control,
    defaultValue: '1',
  })

  const handleDecrease = () => {
    const prev = parseInt(field.value)
    if (prev <= 1) {
      return
    }

    const next = prev - 1
    field.onChange(next.toLocaleString())
  }

  const handleIncrease = () => {
    const prev = parseInt(field.value)
    if (prev >= 10) {
      return
    }

    const next = prev + 1
    field.onChange(next.toLocaleString())
  }

  return (
    <div className="flex px-2">
      <button type="button" onClick={handleDecrease}>
        -
      </button>
      <input
        disabled
        value={field.value}
        className="w-8 h-8 bg-inherit text-center"
      />
      <button type="button" onClick={handleIncrease}>
        +
      </button>
    </div>
  )
}

export default MemberCount

'use client'

import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from '@/_components/ui/RadioGroup'
import React from 'react'
import { Control, useController } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'
import { GenreData } from '@/_constants/teamAdd'

interface GenreFormProps {
  control: Control<TeamAddFormValueType>
}

const GenreForm = ({ control }: GenreFormProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: 'genre',
    control,
    rules: { required: '프로젝트 유형을 선택해주세요.' },
  })

  return (
    <div>
      <h5 className="mb-2 font-bold">프로젝트 유형 *</h5>
      <RadioGroup
        value={field.value}
        onValueChange={(value) => field.onChange(value)}
        ref={field.ref}
      >
        <div className="flex gap-x-4">
          {GenreData.map(({ value }, idx) => (
            <div key={`${value}${idx}`} className="flex items-center gap-x-2">
              <RadioGroupItem value={value} id={value}>
                <RadioGroupIndicator>
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </RadioGroupIndicator>
              </RadioGroupItem>
              <label htmlFor={value} className="hover:cursor-pointer">
                {value}
              </label>
            </div>
          ))}
        </div>
      </RadioGroup>
      {error && <p className="text-red-6 text-sm mt-2">{error.message}</p>}
    </div>
  )
}

export default GenreForm

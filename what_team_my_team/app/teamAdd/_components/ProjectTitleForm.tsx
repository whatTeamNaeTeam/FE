'use client'

import React from 'react'
import { Control, useController } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'

interface ProjectTitleFormProps {
  control: Control<TeamAddFormValueType>
}

const ProjectTitleForm = ({ control }: ProjectTitleFormProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: 'title',
    control,
    rules: {
      required: '프로젝트 제목을 입력해주세요.',
      minLength: {
        value: 2,
        message: '프로젝트 제목은 최소 2자 이상 30자 이하로 작성해야 됩니다.',
      },
      maxLength: {
        value: 30,
        message: '프로젝트 제목은 최소 2자 이상 30자 이하로 작성해야 됩니다.',
      },
    },
  })

  return (
    <div>
      <h5 className="mb-2 font-bold">프로젝트명 *</h5>
      <input
        className="border p-2 text-sm rounded-sm w-full"
        placeholder="2~30자 이내로 입력해주세요."
        value={field.value}
        onChange={field.onChange}
        ref={field.ref}
      />
      {error && <p className="text-red-6 text-sm mt-2">{error.message}</p>}
    </div>
  )
}

export default ProjectTitleForm

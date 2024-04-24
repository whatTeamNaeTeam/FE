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
    rules: { required: '프로젝트 제목을 입력해주세요.' },
  })
  return (
    <div>
      <h5 className="mb-2 font-bold">프로젝트명 *</h5>
      <input
        className="border p-2 text-sm rounded-sm w-full"
        placeholder="3~20자 이내로 입력해주세요."
        value={field.value}
        onChange={field.onChange}
        ref={field.ref}
      />
      {error && <p className="text-red-6 text-sm mt-2">{error.message}</p>}
    </div>
  )
}

export default ProjectTitleForm

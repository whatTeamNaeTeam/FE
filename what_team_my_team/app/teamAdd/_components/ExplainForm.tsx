'use client'

import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import { Control, useController } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'

interface ExplainFormProps {
  control: Control<TeamAddFormValueType>
}

const ExplainForm = ({ control }: ExplainFormProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: 'explain',
    control,
    rules: {
      required: '프로젝트 설명을 입력해주세요.',
      minLength: {
        value: 1,
        message: '프로젝트 설명은 최소 1자 이상 2000자 이하로 작성해야 됩니다.',
      },
      maxLength: {
        value: 2000,
        message: '프로젝트 설명은 최소 1자 이상 2000자 이하로 작성해야 됩니다.',
      },
    },
  })
  return (
    <div className="flex flex-col w-full">
      <h5 className="mb-2 font-bold">프로젝트 설명 *</h5>
      <input className="w-0 h-0" ref={field.ref} />
      <MDEditor
        visibleDragbar={false}
        preview={'edit'}
        value={field.value}
        onChange={field.onChange}
        data-color-mode="light"
      />
      {error && <p className="text-red-6 text-sm mt-2">{error.message}</p>}
    </div>
  )
}

export default ExplainForm

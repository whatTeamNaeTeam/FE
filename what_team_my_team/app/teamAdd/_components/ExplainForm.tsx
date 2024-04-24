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
    rules: { required: '프로젝트 설명을 입력해주세요.' },
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
      />
      {error && <p className="text-red-6 text-sm mt-2">{error.message}</p>}
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
    </div>
  )
}

export default ExplainForm

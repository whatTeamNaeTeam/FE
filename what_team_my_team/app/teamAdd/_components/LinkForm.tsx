'use client'

import Button from '@/_components/ui/Button'
import React from 'react'
import LinkItem from './LinkItem'
import { defaultLink } from '@/_constants/teamAdd'
import { Control, useFieldArray } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'

interface LinkFormProps {
  control: Control<TeamAddFormValueType>
}

const LinkForm = ({ control }: LinkFormProps) => {
  const { fields, append, remove } = useFieldArray({
    name: 'linkList',
    control,
  })

  const handleLinkAdd = () => {
    append(defaultLink)
  }

  const handleRemove = (index: number) => {
    if (fields.length <= 1) {
      return
    }

    remove(index)
  }

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h5 className="mb-2 font-bold">관련 링크</h5>
        <Button type="button" onClick={handleLinkAdd}>
          추가
        </Button>
      </div>
      <ul className="flex flex-col gap-y-2">
        {fields.map((value, idx) => (
          <li key={value.id} className="flex items-center gap-x-4">
            <LinkItem index={idx} control={control} />
            <Button
              type="button"
              variant={'lined'}
              onClick={() => handleRemove(idx)}
            >
              삭제
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinkForm

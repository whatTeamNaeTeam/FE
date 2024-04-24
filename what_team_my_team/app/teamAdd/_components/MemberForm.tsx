'use client'

import React, { useState } from 'react'
import { Control, useFieldArray } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'
import MainCategory from './MainCategory'
import SubCategory from './SubCategory'
import Button from '@/_components/ui/Button'
import MemberCount from './MemberCount'
import { defaultCategory } from '@/_constants/teamAdd'

interface MemberFormProps {
  control: Control<TeamAddFormValueType>
}

const MemberForm = ({ control }: MemberFormProps) => {
  const { fields, append, remove } = useFieldArray({
    name: 'category',
    control,
  })
  const [selectedMain, setSelectedMain] = useState(
    fields.map((item) => item.mainCategory),
  )

  const handleAppend = () => {
    if (fields.length >= 5) {
      return
    }

    append(defaultCategory)
    setSelectedMain((prev) => [...prev, defaultCategory.mainCategory])
  }

  const handleRemove = (index: number) => {
    if (fields.length <= 1) {
      return
    }

    remove(index)
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h5 className="mb-2 font-bold">모집인원 *</h5>
        <Button onClick={handleAppend} type="button">
          추가
        </Button>
      </div>
      <ul className="flex flex-col gap-y-2">
        {fields.map((item, idx) => {
          return (
            <li key={item.id} className="flex items-center">
              <div className="flex gap-x-4">
                <MainCategory
                  control={control}
                  index={idx}
                  setSelectedMain={setSelectedMain}
                />
                <SubCategory
                  control={control}
                  index={idx}
                  selectedMain={selectedMain[idx]}
                />
              </div>
              <MemberCount control={control} index={idx} />
              <Button
                variant={'lined'}
                onClick={() => handleRemove(idx)}
                type="button"
              >
                삭제
              </Button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MemberForm

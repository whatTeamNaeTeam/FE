'use client'

import React, { useState } from 'react'
import { Control, useFieldArray } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'
import Button from '@/_components/ui/Button'
import MemberCount from './MemberCount'
import { defaultCategory } from '@/_constants/teamAdd'
import { MainCategoryInput } from './MainCategory'
import { SubCategoryInput } from './SubCategory'

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
    <div className="w-full">
      <div className="flex justify-between items-center mb-2 ">
        <h5 className="font-bold">모집인원 *</h5>
        <Button onClick={handleAppend} size={'sm'} type="button">
          추가
        </Button>
      </div>
      <ul className="flex flex-col gap-y-2 w-full">
        {fields.map((item, idx) => {
          return (
            <li key={item.id} className="flex items-center w-full">
              <div className="flex gap-x-4 w-full ">
                <MainCategoryInput
                  control={control}
                  index={idx}
                  setSelectedMain={setSelectedMain}
                />
                <SubCategoryInput
                  control={control}
                  index={idx}
                  selectedMain={selectedMain[idx]}
                />
              </div>
              <div className="flex flex-shrink-0">
                <MemberCount control={control} index={idx} />
                <Button
                  variant={'lined'}
                  onClick={() => handleRemove(idx)}
                  type="button"
                >
                  삭제
                </Button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MemberForm

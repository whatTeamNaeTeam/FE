'use client'

import React, { MouseEventHandler, useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/_components/ui/Dropdown'
import { Control, useController } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'
import { subCategoryData } from '@/_constants/teamAdd'

interface SubCategoryProps {
  control: Control<TeamAddFormValueType>
  index: number
  selectedMain: string
}

const SubCategory = ({ control, index, selectedMain }: SubCategoryProps) => {
  const { field } = useController({
    name: `category.${index}.subCategory`,
    control,
    defaultValue: subCategoryData.find((item) => item.type === selectedMain)
      ?.tags[0],
  })
  const [selectedValue, setSelectedValue] = useState(
    subCategoryData.find((item) => item.type === selectedMain)?.tags[0],
  )

  useEffect(() => {
    // selectedMain 값이 변경될 때마다 해당 메인 카테고리에 대한 하위 카테고리를 찾아 선택함
    const categoryData = subCategoryData.find(
      (category) => category.type === selectedMain,
    )

    if (categoryData) {
      setSelectedValue(categoryData.tags[0]) // 첫 번째 하위 카테고리 선택
      field.onChange(categoryData.tags[0]) // 선택된 카테고리를 input 값으로 설정
    }
  }, [selectedMain])

  const handleChangeValue: MouseEventHandler<HTMLDivElement> = (e) => {
    const { textContent } = e.currentTarget

    if (!textContent) {
      return
    }

    setSelectedValue(textContent)
    field.onChange(textContent)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="w-full p-2 border focus-within:border-gray-6 rounded-md">
          <input
            disabled
            className="outline-none bg-inherit text-sm text-gray-8"
            value={selectedValue}
          />
        </div>
        {/* <input disabled value={selectedValue} /> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {subCategoryData
          .filter((item) => item.type === selectedMain)
          .map((item) =>
            item.tags.map((tag, idx) => (
              <DropdownMenuItem key={idx} onClick={handleChangeValue}>
                {tag}
              </DropdownMenuItem>
            )),
          )}

        <DropdownMenuItem onClick={handleChangeValue}>기타</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SubCategory

'use client'

import React, { MouseEventHandler, useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '@/_components/ui/Select'
import { Control, useController } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'
import {
  MainCategoryType,
  subCategoryData,
  SubCategoryType,
} from '@/_constants/teamAdd'
import { cn } from '@/_lib/utils'
import { SelectItemText } from '@radix-ui/react-select'

interface SubCategoryProps {
  control: Control<TeamAddFormValueType>
  index: number
  selectedMain: MainCategoryType
}

export function SubCategoryInput({
  control,
  index,
  selectedMain,
}: SubCategoryProps) {
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

  const handleChangeValue = (value: string) => {
    setSelectedValue(value as SubCategoryType<MainCategoryType>)
    field.onChange(value)
  }

  return (
    <Select
      defaultValue={field.value}
      value={field.value}
      onValueChange={(value) => handleChangeValue(value)}
    >
      <SelectTrigger asChild>
        <button
          className={cn(
            'w-full text-left select-none items-center justify-center rounded-md py-2 text-sm font-medium ',
            'border p-2 text-gray-8',
            'bg-inherit',
            'focus:outline-none focus-visible:ring focus-visible:ring-indigo-4 focus-visible:ring-opacity-75',
            'group',
            'radix-state-open:bg-gray-5',
            'radix-state-on:bg-gray-50 ',
            'radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50',
          )}
          type="button"
        >
          <SelectValue />
        </button>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectViewport className="bg-white p-2 rounded-lg shadow-lg">
            <SelectGroup>
              {subCategoryData
                .filter((item) => item.type === selectedMain)
                .map((item) =>
                  item.tags.map((tag, idx) => (
                    <SelectItem
                      value={tag}
                      key={`${item}${idx}`}
                      className={cn(
                        'relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium focus:bg-gray-100',
                        'radix-disabled:opacity-50',
                        'focus:outline-none select-none',
                      )}
                    >
                      <SelectItemText>{tag}</SelectItemText>
                    </SelectItem>
                  )),
                )}
            </SelectGroup>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </Select>
  )
}

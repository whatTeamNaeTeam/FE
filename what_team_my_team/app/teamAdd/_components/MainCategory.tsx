'use client'

import React, { Dispatch } from 'react'
import { Control, useController } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'
import { SetStateAction } from 'jotai'
import {
  defaultCategory,
  MainCategory,
  mainCategoryData,
  MainCategoryType,
} from '@/_constants/teamAdd'
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
import { cn } from '@/_lib/utils'
import { SelectItemText } from '@radix-ui/react-select'

interface MainCategoryProps {
  control: Control<TeamAddFormValueType>
  index: number
  setSelectedMain: Dispatch<SetStateAction<MainCategoryType[]>>
}

export function MainCategoryInput({
  control,
  index,
  setSelectedMain,
}: MainCategoryProps) {
  const { field } = useController({
    name: `category.${index}.mainCategory`,
    control,
    defaultValue: defaultCategory.mainCategory,
  })

  const handleChangeValue = (value: string) => {
    if (
      !Object.values(MainCategory).includes(
        value as (typeof MainCategory)[keyof typeof MainCategory],
      )
    ) {
      return
    }

    const selectedMainCategory =
      value as (typeof MainCategory)[keyof typeof MainCategory]

    setSelectedMain((prev) => {
      const updatedSelectedMain = [...prev]
      updatedSelectedMain[index] = selectedMainCategory
      return updatedSelectedMain
    })
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
            'w-full whitespace-nowrap text-left select-none items-center justify-center rounded-md py-2 text-sm font-medium ',
            'bg-inherit border p-2 text-gray-8',
            'focus:outline-none focus-visible:ring focus-visible:ring-indigo-4 focus-visible:ring-opacity-75',
            'group',
            'radix-state-open:bg-gray-5',
          )}
          type="button"
        >
          <SelectValue placeholder={defaultCategory.mainCategory} />
        </button>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectViewport className="bg-white p-2 shadow-lg">
            <SelectGroup>
              {mainCategoryData.map((item, idx) => (
                <SelectItem
                  value={item}
                  key={`${item}${idx}`}
                  className={cn(
                    'relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium focus:bg-gray-100 ',
                    'radix-disabled:opacity-50',
                    'focus:outline-none select-none',
                  )}
                >
                  <SelectItemText>{item}</SelectItemText>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </Select>
  )
}

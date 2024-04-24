'use client'

import React, { Dispatch, MouseEventHandler } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/_components/ui/Dropdown'
import { Control, useController } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'
import { SetStateAction } from 'jotai'
import { mainCategoryData } from '@/_constants/teamAdd'

interface MainCategoryProps {
  control: Control<TeamAddFormValueType>
  index: number
  setSelectedMain: Dispatch<SetStateAction<string[]>>
}

const MainCategory = ({
  control,
  index,
  setSelectedMain,
}: MainCategoryProps) => {
  const { field } = useController({
    name: `category.${index}.mainCategory`,
    control,
    defaultValue: mainCategoryData[0],
  })

  const handleChangeValue: MouseEventHandler<HTMLDivElement> = (e) => {
    const { textContent } = e.currentTarget

    if (!textContent) {
      return
    }

    setSelectedMain((prev) => {
      const updatedSelectedMain = [...prev]
      updatedSelectedMain[index] = textContent
      return updatedSelectedMain
    })
    field.onChange(textContent)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-full p-2 border focus-within:border-gray-6 rounded-md">
          <input
            disabled
            className="outline-none bg-inherit text-sm text-gray-8"
            value={field.value}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {mainCategoryData.map((item, idx) => (
          <DropdownMenuItem key={`${item}${idx}`} onClick={handleChangeValue}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MainCategory

'use client'

import React, { MouseEventHandler } from 'react'
import { Control, useController } from 'react-hook-form'
import {
  REGISTER_FIELD_NAMES,
  UserRegisterFormValueType,
} from './SignupContainer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/_components/ui/DropdownMenu'

interface PositionInputProps {
  control: Control<UserRegisterFormValueType>
}

const PositionInput = ({ control }: PositionInputProps) => {
  return (
    <>
      <label
        htmlFor={REGISTER_FIELD_NAMES.position}
        className="inline-block text-sm mb-2 font-bold"
      >
        포지션 *
      </label>
      <PositionInputDropdown control={control} />
    </>
  )
}

interface PositionInputDropdownProps {
  control: Control<UserRegisterFormValueType>
}

const positionData = [
  { label: '백엔드' },
  { label: '프론트엔드' },
  { label: 'AI' },
  { label: '디자인' },
]

const PositionInputDropdown = ({ control }: PositionInputDropdownProps) => {
  const { field } = useController<UserRegisterFormValueType>({
    name: REGISTER_FIELD_NAMES.position,
    defaultValue: positionData[0].label,
    control,
  })
  const handleChangeValue: MouseEventHandler<HTMLDivElement> = (e) => {
    const { textContent } = e.currentTarget

    if (!textContent) {
      return
    }
    field.onChange(textContent)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-[240px] p-2 border focus-within:border-gray-6 rounded-md">
          <input
            disabled
            className="outline-none bg-inherit text-sm text-gray-8"
            value={field.value}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          {positionData.map((item, idx) => (
            <DropdownMenuItem
              key={`${item.label}-${idx}`}
              onClick={handleChangeValue}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

export default PositionInput

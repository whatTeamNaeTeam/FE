'use client'

import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from '@/_components/ui/RadioGroup'
import React from 'react'
import { Control, ControllerRenderProps, useController } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'
import { GenreData } from '@/_constants/teamAdd'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectValue,
} from '@/_components/ui/Select'
import { cn } from '@/_lib/utils'
import { SelectItemText, SelectViewport } from '@radix-ui/react-select'
import { FaChevronDown } from 'react-icons/fa'

interface GenreFormProps {
  control: Control<TeamAddFormValueType>
}

export function GenreForm({ control }: GenreFormProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: 'genre',
    control,
    rules: { required: '프로젝트 유형을 선택해주세요.' },
  })

  return (
    <div>
      <h5 className="mb-2 font-bold">프로젝트 유형 *</h5>
      <SelectTypeForm field={field} />
      <RadioGroup
        value={field.value}
        onValueChange={(value) => field.onChange(value)}
        ref={field.ref}
      >
        <div className="overflow-auto gap-x-4 hidden sm:flex">
          {GenreData.map(({ value }, idx) => (
            <div key={`${value}${idx}`} className="flex items-center gap-x-2">
              <RadioGroupItem value={value} id={value}>
                <RadioGroupIndicator>
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </RadioGroupIndicator>
              </RadioGroupItem>
              <label
                htmlFor={value}
                className="text-sm whitespace-nowrap hover:cursor-pointer"
              >
                {value}
              </label>
            </div>
          ))}
        </div>
      </RadioGroup>
      {error && <p className="text-red-6 text-sm mt-2">{error.message}</p>}
    </div>
  )
}

interface SelectTypeFormProps {
  field: ControllerRenderProps<TeamAddFormValueType, 'genre'>
}

function SelectTypeForm({ field }: SelectTypeFormProps) {
  return (
    <Select
      value={field.value}
      onValueChange={(value) => field.onChange(value)}
    >
      <SelectTrigger asChild>
        <button
          className={cn(
            'inline-flex items-center justify-between sm:hidden w-[120px] whitespace-nowrap text-left select-none rounded-md py-2 text-sm font-medium',
            'bg-inherit border p-2 text-gray-8',
            'focus:outline-none focus-visible:ring focus-visible:ring-indigo-4 focus-visible:ring-opacity-75',
            'group',
          )}
          type="button"
        >
          <SelectValue placeholder="유형 선택" />
          <SelectIcon className="pl-1">
            <FaChevronDown size={12} />
          </SelectIcon>
        </button>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectViewport className="bg-white p-2 shadow-lg">
            <SelectGroup>
              {GenreData.map(({ value }) => (
                <SelectItem
                  key={value}
                  value={value}
                  className={cn(
                    'relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium focus:bg-gray-100',
                    'radix-disabled:opacity-50',
                    'focus:outline-none select-none',
                  )}
                >
                  <SelectItemText>{value}</SelectItemText>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </Select>
  )
}

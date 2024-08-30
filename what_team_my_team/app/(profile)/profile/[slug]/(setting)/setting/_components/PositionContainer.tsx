'use client'

import { useController, useFormContext } from 'react-hook-form'
import { BasicInfoFormValues } from './BasicInfoContainer'
import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'
import { positionData } from '@/_constants/position'
import { FaChevronDown } from 'react-icons/fa'

export function PositionContainer() {
  return (
    <div>
      <h3 className="text-gray-8 font-semibold mb-2">주 포지션</h3>
      <PositionSelect />
    </div>
  )
}

function PositionSelect() {
  const { control } = useFormContext<BasicInfoFormValues>()
  const { field } = useController({
    name: 'position',
    control,
  })

  return (
    <SelectPrimitive.Root
      defaultValue={field.value}
      onValueChange={(value) => field.onChange(value)}
    >
      <SelectPrimitive.Trigger asChild aria-label="Food">
        <button className="inline-flex justify-between items-center border border-gray-4 rounded-sm py-2 px-2 text-sm w-full">
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className="ml-2">
            <FaChevronDown />
          </SelectPrimitive.Icon>
        </button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content>
        <SelectPrimitive.Viewport className="bg-white p-2 rounded-lg shadow-lg">
          <SelectPrimitive.Group>
            {positionData.map((item) => (
              <SelectPrimitive.Item
                key={`select-primitive-item-${item.value}`}
                value={item.value}
                className={clsx(
                  'relative flex items-center px-2 py-2 rounded-md text-sm text-gray-700 font-medium focus:bg-gray-100 ',
                  'radix-disabled:opacity-50',
                  'focus:outline-none select-none',
                )}
              >
                <SelectPrimitive.ItemText>
                  {item.content}
                </SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  )
}

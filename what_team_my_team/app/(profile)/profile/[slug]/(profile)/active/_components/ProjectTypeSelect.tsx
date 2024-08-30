'use client'

import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { FaChevronDown } from 'react-icons/fa'
import { useAtom } from 'jotai'
import { projectTypeAtom, projectTypeItems } from '@/_stores/atoms/select'
import { cn } from '@/_lib/utils'

const ProjectTypeSelect = () => {
  const [value, setValue] = useAtom(projectTypeAtom)

  return (
    <SelectPrimitive.Root
      defaultValue={value}
      value={value}
      onValueChange={(value) => setValue(value)}
    >
      <SelectPrimitive.Trigger className="py-1 focus:outline-none">
        <button
          className={cn(
            'inline-flex select-none items-center justify-center rounded-md py-2 text-sm font-medium',
            'bg-white text-gray-600',
            'focus:outline-none focus-visible:ring focus-visible:ring-indigo-4 focus-visible:ring-opacity-75',
            'group',
            'radix-state-open:bg-gray-5',
            'radix-state-on:bg-gray-50 ',
            'radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50',
          )}
        >
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className="pl-1">
            <FaChevronDown size={12} />
          </SelectPrimitive.Icon>
        </button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content>
          <SelectPrimitive.Viewport className="bg-white p-2 rounded-lg shadow-lg">
            <SelectPrimitive.Group>
              {projectTypeItems.map((item) => (
                <SelectPrimitive.Item
                  key={item.value}
                  value={item.value}
                  className={cn(
                    'relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900',
                    'radix-disabled:opacity-50',
                    'focus:outline-none select-none',
                  )}
                >
                  <SelectPrimitive.ItemText>
                    {item.label}
                  </SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

export default ProjectTypeSelect

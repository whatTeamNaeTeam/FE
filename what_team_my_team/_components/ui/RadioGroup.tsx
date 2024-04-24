import React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '@/_lib/utils'

const RadioGroup = RadioGroupPrimitive.Root

const RadioGroupItem = ({
  value,
  className,
  children,
  id,
}: RadioGroupPrimitive.RadioGroupItemProps) => {
  return (
    <RadioGroupPrimitive.Item
      id={id}
      value={value}
      className={cn(
        'peer relative w-4 h-4 rounded-full',
        'border border-gray-6 text-white',
        'radix-state-checked:bg-indigo-4',
        'radix-state-unchecked:bg-gray-2',
        'radix-state-unchecked:hover:bg-gray-4',
        'focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2',
        className,
      )}
    >
      {children}
    </RadioGroupPrimitive.Item>
  )
}

const RadioGroupIndicator = ({
  className,
  children,
}: RadioGroupPrimitive.RadioGroupIndicatorProps) => {
  return (
    <RadioGroupPrimitive.Indicator
      className={cn(
        'absolute inset-0 flex items-center justify-center leading-0',
        className,
      )}
    >
      {children}
    </RadioGroupPrimitive.Indicator>
  )
}

export { RadioGroup, RadioGroupItem, RadioGroupIndicator }

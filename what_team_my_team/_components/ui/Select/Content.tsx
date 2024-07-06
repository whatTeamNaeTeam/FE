'use client'

import * as SelectPrimitive from '@radix-ui/react-select'

const SelectContent = ({
  children,
  ...props
}: SelectPrimitive.SelectContentProps) => {
  return (
    <SelectPrimitive.Content {...props}>{children}</SelectPrimitive.Content>
  )
}

export default SelectContent

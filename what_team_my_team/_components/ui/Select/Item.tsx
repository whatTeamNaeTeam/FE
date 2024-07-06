'use client'

import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

const SelectItem = React.forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectItemProps
>(({ children, ...props }) => {
  return <SelectPrimitive.Item {...props}>{children}</SelectPrimitive.Item>
})
SelectItem.displayName = SelectPrimitive.SelectItem.displayName

export default SelectItem

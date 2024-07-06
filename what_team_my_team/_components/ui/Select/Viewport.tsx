'use client'

import * as SelectPrimitive from '@radix-ui/react-select'

const SelectViewport = ({
  children,
  ...props
}: SelectPrimitive.SelectViewportProps) => {
  return (
    <SelectPrimitive.Viewport {...props}>{children}</SelectPrimitive.Viewport>
  )
}

export default SelectViewport

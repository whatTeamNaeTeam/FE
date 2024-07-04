'use client'

import * as SelectPrimitive from '@radix-ui/react-select'

const SelectIcon = ({
  children,
  ...props
}: SelectPrimitive.SelectIconProps) => {
  return <SelectPrimitive.Icon {...props}>{children}</SelectPrimitive.Icon>
}

export default SelectIcon

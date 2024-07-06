'use client'

import * as SelectPrimitive from '@radix-ui/react-select'

const SelectValue = ({ ...props }: SelectPrimitive.SelectValueProps) => {
  return <SelectPrimitive.Value {...props} />
}

export default SelectValue

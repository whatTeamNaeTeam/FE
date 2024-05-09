'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const DropdownMenu = ({
  children,
  ...props
}: DropdownMenuPrimitive.DropdownMenuProps) => {
  return (
    <DropdownMenuPrimitive.Root {...props}>
      {children}
    </DropdownMenuPrimitive.Root>
  )
}

export default DropdownMenu

'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const DropdownMenuPortal = ({
  children,
}: DropdownMenuPrimitive.DropdownMenuPortalProps) => {
  return <DropdownMenuPrimitive.Portal>{children}</DropdownMenuPrimitive.Portal>
}

export default DropdownMenuPortal

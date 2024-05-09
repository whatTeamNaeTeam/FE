'use client'

import { cn } from '@/_lib/utils'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { type VariantProps, cva } from 'class-variance-authority'

const DropdownMenuItemVariants = cva(
  `flex w-full outline-none select-none rounded-sm pointer-cursor hover:bg-gray-2`,
  {
    variants: {
      position: {
        center: 'justify-center',
      },
      colorType: {
        default: 'text-gray-6',
        danger: 'text-red-6',
      },
    },
    defaultVariants: {
      colorType: 'default',
    },
  },
)

export interface DropdownMenuItemProps
  extends DropdownMenuPrimitive.DropdownMenuItemProps,
    VariantProps<typeof DropdownMenuItemVariants> {}

const DropdownMenuItem = ({
  colorType,
  className,
  children,
  ...props
}: DropdownMenuItemProps) => {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        DropdownMenuItemVariants({ colorType }),
        'items-center px-2 py-2 text-xs',
        className,
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  )
}

export default DropdownMenuItem

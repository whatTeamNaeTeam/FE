'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/_lib/utils'

const DropdownMenuContentVariants = cva(`w-full rounded-lg shadow-md`, {
  variants: {
    colorType: {
      default: 'bg-white',
    },
    animate: {
      default:
        'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
    },
    size: {
      default: 'p-1.5',
    },
  },
  defaultVariants: {
    colorType: 'default',
    animate: 'default',
    size: 'default',
  },
})

export interface DropdownMenuContentProps
  extends DropdownMenuPrimitive.DropdownMenuContentProps,
    VariantProps<typeof DropdownMenuContentVariants> {}

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ colorType, animate, size, children, className, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Content
      className={cn(
        DropdownMenuContentVariants({ colorType, animate, size }),
        'w-48 md:w-56',
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  )
})
DropdownMenuContent.displayName =
  DropdownMenuPrimitive.DropdownMenuContent.displayName

export default DropdownMenuContent

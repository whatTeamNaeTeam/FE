'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cn } from '@/_lib/utils'

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuPortal = ({
  children,
}: DropdownMenuPrimitive.DropdownMenuPortalProps) => {
  return <DropdownMenuPrimitive.Portal>{children}</DropdownMenuPrimitive.Portal>
}

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <DropdownMenuPortal>
      <DropdownMenuPrimitive.Content
        className={cn(
          'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
          'w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56',
          'bg-white',
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPortal>
  )
})
DropdownMenuContent.displayName =
  DropdownMenuPrimitive.DropdownMenuContent.displayName

const DropdownMenuItem = ({
  className,
  children,
  ...props
}: DropdownMenuPrimitive.DropdownMenuItemProps) => {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        'flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none',
        'text-gray-400 focus:bg-gray-50',
        className,
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  )
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
}

'use client'

import { cn } from '@/_lib/utils'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { type VariantProps, cva } from 'class-variance-authority'

const AlertDialogTitleVariants = cva(``, {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
    position: {
      default: '',
      center: 'text-center',
    },
  },
  defaultVariants: {
    size: 'sm',
    position: 'default',
  },
})

export interface AlertDialogTitleProps
  extends AlertDialogPrimitive.AlertDialogTitleProps,
    VariantProps<typeof AlertDialogTitleVariants> {}

const AlertDialogTitle = ({
  position,
  children,
  className,
  ...props
}: AlertDialogTitleProps) => {
  return (
    <AlertDialogPrimitive.Title
      className={cn(AlertDialogTitleVariants({ position }), className)}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Title>
  )
}

export default AlertDialogTitle

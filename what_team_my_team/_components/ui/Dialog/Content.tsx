'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/_lib/utils'

const DialogContentVariants = cva(
  `flex flex-col justify-between bg-white fixed inset-1/2 
  -translate-x-1/2 -translate-y-1/2 animate-content
  rounded-md p-4 shadow-md w-[90vw] h-[80vh] max-w-[350px]`,
  {
    variants: {
      size: {
        sm: 'max-h-[200px]',
        md: 'max-h-[400px]',
        lg: 'max-h-[600px]',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
)

export interface DialogContentProps
  extends DialogPrimitive.DialogContentProps,
    VariantProps<typeof DialogContentVariants> {}

const DialogContent = ({
  children,
  className,
  size,
  ...props
}: DialogContentProps) => {
  return (
    <DialogPrimitive.Content
      className={cn(DialogContentVariants({ size }), className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  )
}

export default DialogContent

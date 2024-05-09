'use client'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/_lib/utils'
import AlertDialogPortal from './Portal'
import AlertDialogOverlay from './Overlay'

const AlertDialogContentVariants = cva(
  `flex flex-col justify-between bg-white fixed inset-1/2 
  -translate-x-1/2 -translate-y-1/2 animate-content
  rounded-md p-4 shadow-md w-[90vw] h-[20vh]`,
  {
    variants: {
      size: {
        default: 'max-w-[450px] max-h-[400px]',
        sm: 'max-w-[250px]',
        lg: 'w-[90vh] max-w-[450px] h-[40vh] max-h-[600px]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export interface AlertDialogContentProps
  extends AlertDialogPrimitive.AlertDialogContentProps,
    VariantProps<typeof AlertDialogContentVariants> {}

const AlertDialogContent = ({
  children,
  className,
  size,
  ...props
}: AlertDialogContentProps) => {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        className={cn(AlertDialogContentVariants({ size }), className)}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPortal>
  )
}

export default AlertDialogContent

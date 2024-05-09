'use client'

import { cn } from '@/_lib/utils'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { cva } from 'class-variance-authority'

const AlertDialogOverlayVariants = cva(
  `bg-dialog animate-overlay fixed inset-0`,
)

const AlertDialogOverlay = ({
  className,
  children,
  ...props
}: AlertDialogPrimitive.AlertDialogOverlayProps) => {
  return (
    <AlertDialogPrimitive.Overlay
      className={cn(AlertDialogOverlayVariants(), className)}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Overlay>
  )
}

export default AlertDialogOverlay

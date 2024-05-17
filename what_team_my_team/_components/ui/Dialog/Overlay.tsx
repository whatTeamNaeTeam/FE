'use client'

import { cn } from '@/_lib/utils'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cva } from 'class-variance-authority'

const DialogOverlayVariants = cva(`bg-dialog animate-overlay fixed inset-0`)

const DialogOverlay = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogOverlayProps) => {
  return (
    <DialogPrimitive.Overlay
      className={cn(DialogOverlayVariants(), className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Overlay>
  )
}

export default DialogOverlay

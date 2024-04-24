'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '@/_lib/utils'

const Dialog = DialogPrimitive.Root

const DialogPortal = ({ children }: DialogPrimitive.DialogPortalProps) => {
  return <DialogPrimitive.Portal>{children}</DialogPrimitive.Portal>
}

const DialogOverlay = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogOverlayProps) => {
  return (
    <DialogPrimitive.Overlay className={cn(className)} {...props}>
      {children}
    </DialogPrimitive.Overlay>
  )
}

const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogPrimitive.DialogContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content className={cn(className)} {...props} ref={ref}>
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

export { Dialog, DialogPortal, DialogOverlay, DialogContent }

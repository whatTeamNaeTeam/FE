'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'

const DialogPortal = ({ children }: DialogPrimitive.DialogPortalProps) => {
  return <DialogPrimitive.Portal>{children}</DialogPrimitive.Portal>
}

export default DialogPortal

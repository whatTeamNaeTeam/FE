'use client'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

const AlertDialogPortal = ({
  children,
}: AlertDialogPrimitive.DialogPortalProps) => {
  return <AlertDialogPrimitive.Portal>{children}</AlertDialogPrimitive.Portal>
}

export default AlertDialogPortal

'use client'

import { cn } from '@/_lib/utils'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

const AlertDialogCancel = ({
  children,
  className,
  ...props
}: AlertDialogPrimitive.AlertDialogCancelProps) => {
  return (
    <AlertDialogPrimitive.Cancel className={cn(className)} {...props}>
      {children}
    </AlertDialogPrimitive.Cancel>
  )
}

export default AlertDialogCancel

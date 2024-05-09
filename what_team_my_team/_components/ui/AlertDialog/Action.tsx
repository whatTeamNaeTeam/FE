'use client'

import { cn } from '@/_lib/utils'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

const AlertDialogAction = ({
  children,
  className,
  ...props
}: AlertDialogPrimitive.AlertDialogActionProps) => {
  return (
    <AlertDialogPrimitive.Action className={cn(className)} {...props}>
      {children}
    </AlertDialogPrimitive.Action>
  )
}

export default AlertDialogAction

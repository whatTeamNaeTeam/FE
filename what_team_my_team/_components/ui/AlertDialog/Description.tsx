'use client'

import { cn } from '@/_lib/utils'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

const AlertDialogDescription = ({
  children,
  className,
  ...props
}: AlertDialogPrimitive.AlertDialogDescriptionProps) => {
  return (
    <AlertDialogPrimitive.Description className={cn(className)} {...props}>
      {children}
    </AlertDialogPrimitive.Description>
  )
}

export default AlertDialogDescription

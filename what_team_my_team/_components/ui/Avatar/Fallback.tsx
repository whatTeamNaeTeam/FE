'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { VariantProps, cva } from 'class-variance-authority'

const AvatarFallbackVariants = cva(
  `flex w-full h-full item-center justify-center bg-white text-indigo-6 font-md`,
)

interface AvatarFallbackProps
  extends AvatarPrimitive.AvatarFallbackProps,
    VariantProps<typeof AvatarFallbackVariants> {}

const AvatarFallback = ({
  children,
  className,
  ...props
}: AvatarFallbackProps) => {
  return (
    <AvatarPrimitive.Fallback
      className={(AvatarFallbackVariants(), className)}
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  )
}

export default AvatarFallback

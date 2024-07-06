'use client'

import { cn } from '@/_lib/utils'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { type VariantProps, cva } from 'class-variance-authority'

const AvatarRootVariants = cva(`inline-flex items-center justify-center`, {
  variants: {
    size: {
      'x-small': 'w-6 h-6',
      small: 'w-8 h-8',
      large: 'w-20 h-20',
      link: 'w-6 h-6',
    },
    rounded: {
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    size: 'small',
    rounded: 'full',
  },
})

export interface AvatarRootProps
  extends AvatarPrimitive.AvatarProps,
    VariantProps<typeof AvatarRootVariants> {}

const AvatarRoot = ({
  children,
  size,
  rounded,
  className,
  ...props
}: AvatarRootProps) => {
  return (
    <AvatarPrimitive.Root
      {...props}
      className={cn(AvatarRootVariants({ size, rounded }), className)}
    >
      {children}
    </AvatarPrimitive.Root>
  )
}

export default AvatarRoot

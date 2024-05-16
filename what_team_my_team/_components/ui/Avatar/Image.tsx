'use client'

import { cn } from '@/_lib/utils'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { type VariantProps, cva } from 'class-variance-authority'

const AvatarImageVariants = cva(`w-full h-full object-cover rounded-[inherit]`)

export interface AvatarImageProps
  extends AvatarPrimitive.AvatarImageProps,
    VariantProps<typeof AvatarImageVariants> {}

const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      className={cn(AvatarImageVariants(), className)}
      {...props}
    />
  )
}

export default AvatarImage

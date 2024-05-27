import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/_lib/utils'

const ButtonVariants = cva(
  `
  inline-flex items-center justify-center py-2 px-4 rounded-md
`,
  {
    variants: {
      variant: {
        primary:
          'bg-indigo-4 text-white hover:bg-indigo-8 disabled:bg-indigo-4 disabled:opacity-30',
        lined:
          'bg-white text-indigo-4 border border-indigo-4 hover:bg-indigo-0 border-indigo-8 text-indigo-8 disabled:opacity-30',
      },
      size: {
        default: 'px-4 text-base h-[36px]',
        sm: 'px-2 text-sm h-[24px]',
        lg: 'px-8 text-lg',
        full: 'w-full text-lg',
        icon: 'h-10 w-10',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      weight: 'normal',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  asChild?: boolean
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, weight, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(ButtonVariants({ variant, size, weight }), className, '')}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export default Button

import { cn } from '@/_lib/utils'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import React from 'react'

const Accordion = AccordionPrimitive.Root

const AccordionItem = ({
  className,
  children,
  value,
  ...props
}: AccordionPrimitive.AccordionItemProps) => {
  return (
    <AccordionPrimitive.AccordionItem
      value={value}
      className={cn('focus:outline-none w-full', className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.AccordionItem>
  )
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <AccordionPrimitive.AccordionContent
      className={cn(className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </AccordionPrimitive.AccordionContent>
  )
})
AccordionContent.displayName = AccordionPrimitive.AccordionContent.displayName

const AccordionTrigger = ({
  children,
  className,
  ...props
}: AccordionPrimitive.AccordionTriggerProps) => {
  return (
    <AccordionPrimitive.AccordionHeader className="w-full">
      <AccordionPrimitive.AccordionTrigger
        className={cn(
          'focus:outline-none',
          'inline-flex w-full items-center justify-between px-4 py-2 text-left',
          className,
        )}
        {...props}
      >
        {children}
      </AccordionPrimitive.AccordionTrigger>
    </AccordionPrimitive.AccordionHeader>
  )
}

export { Accordion, AccordionItem, AccordionContent, AccordionTrigger }

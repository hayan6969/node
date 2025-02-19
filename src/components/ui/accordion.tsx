"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border border-gray-500 rounded-lg relative z-10 before:absolute before:custom-border-2 before:w-20 before:h-[90%]",className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between text-sm p-4 font-medium transition-all text-left [&[data-state=open]>svg]:rotate-180 relative",
      
        className,
      )}
      {...props}
    >
     
      {children}
      <svg width="20" height="20" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-muted-foreground transition-transform duration-200">
<path d="M20.0342 23.0535L2.49781 2.15443" stroke="white" stroke-width="2.99406" stroke-linecap="round"/>
<path d="M19.5361 33.3782L1.99976 12.4792" stroke="white" stroke-width="2.99406" stroke-linecap="round"/>
<path d="M37.999 2L20.4627 22.899" stroke="white" stroke-width="2.99406" stroke-linecap="round"/>
<path d="M37.3486 12.8153L19.8123 33.7143" stroke="white" stroke-width="2.99406" stroke-linecap="round"/>
</svg>

    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
  ref={ref}
  className="overflow-hidden px-4 text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

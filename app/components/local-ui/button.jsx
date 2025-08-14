"use client"

import React from "react"
import cn  from "@/app/lib/cn"

export const Button = React.forwardRef(function Button({ className, asChild, ...props }, ref) {
  const Comp = asChild ? "span" : "button"
  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "h-10 px-4 py-2",
        className,
      )}
      {...props}
    />
  )
})

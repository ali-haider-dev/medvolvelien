"use client"

import React from "react"
import  cn  from "@/app/lib/cn"

export const Textarea = React.forwardRef(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm",
        "shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
})

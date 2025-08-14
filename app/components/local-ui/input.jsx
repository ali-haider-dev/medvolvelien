"use client"

import React from "react"
import  cn  from "@/app/lib/cn"
export const Input = React.forwardRef(function Input({ className, type = "text", ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm",
        "shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
})

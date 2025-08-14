"use client"

import React from "react"
import cn  from "@/app/lib/cn"

const variants = {
  default: "border-gray-200 bg-white text-gray-800",
  destructive: "border-red-200/80 bg-red-50 text-red-700",
}

export const Alert = React.forwardRef(function Alert({ className, variant = "default", ...props }, ref) {
  return (
    <div
      ref={ref}
      role="alert"
      className={cn("w-full rounded-lg border p-4 text-sm", variants[variant] || variants.default, className)}
      {...props}
    />
  )
})

export const AlertDescription = React.forwardRef(function AlertDescription({ className, ...props }, ref) {
  return <div ref={ref} className={cn("text-sm leading-relaxed", className)} {...props} />
})

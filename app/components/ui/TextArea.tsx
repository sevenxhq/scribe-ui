import * as React from "react"

import { cn } from "@utils/clsx"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-[20px] border border-zinc-900 bg-zinc-900 px-4 py-3 text-xs ring-offset-background placeholder:text-zinc-50 focus-visible:outline-none focus:border-cyan-500 focus-visible:ring focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

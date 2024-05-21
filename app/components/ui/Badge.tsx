import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@utils/clsx"

const badgeVariants = cva(
  "inline-flex items-center justify-center   tracking-wider font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent border rounded-full px-2 py-[5px] uppercase text-[8px] bg-cyan-500 text-zinc-950",
        secondary:
          "h-4 w-4 text-[8px]  rounded-full tracking-wider bg-cyan-500 text-zinc-950",
        destructive:
          "border-cyan-900 bg-cyan-950 border text-cyan-700 rounded-lg px-[6px] py-1 text-[10px]",
        outline: "text-foreground border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

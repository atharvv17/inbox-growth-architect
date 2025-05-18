
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow-sm shadow-primary/20",
        secondary: "border-transparent bg-secondary text-secondary-foreground shadow-sm shadow-secondary/20",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow-sm shadow-destructive/20",
        outline: "text-foreground border border-border",
        ghost: "bg-muted/30 text-foreground hover:bg-muted/50",
        neon: "border border-primary text-primary shadow-[0_0_5px_0_hsl(var(--primary))] hover:shadow-[0_0_10px_0_hsl(var(--primary))]",
        gradient: "bg-gradient-to-r from-primary to-secondary text-white border-none",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        glow: "pulse-glow",
      }
    },
    defaultVariants: {
      variant: "default",
      animation: "none",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, animation, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, animation }), className)} {...props} />
  )
}

export { Badge, badgeVariants }


import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:bg-primary/90 hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground shadow-lg shadow-destructive/20 hover:shadow-destructive/30 hover:bg-destructive/90 hover:scale-[1.02]",
        outline: "border border-input bg-background hover:bg-accent/10 hover:text-accent hover:border-accent",
        secondary: "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20 hover:shadow-secondary/30 hover:bg-secondary/90 hover:scale-[1.02]",
        accent: "bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:bg-accent/90 hover:scale-[1.02]",
        ghost: "hover:bg-muted/20 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "relative bg-muted overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/50 before:via-transparent before:to-secondary/50 before:animate-flow hover:before:opacity-100 text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]",
        cyber: "relative bg-background text-primary border border-primary before:absolute before:inset-0 before:bg-primary/10 before:opacity-0 hover:before:opacity-100 hover:shadow-[0_0_10px_0_hsl(var(--primary))] hover:scale-[1.02]",
        neon: "cyber-border bg-background text-primary hover:text-primary-foreground overflow-hidden hover:scale-[1.02]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }


import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorColor?: "default" | "primary" | "secondary" | "accent" | "success";
  variant?: "default" | "striped" | "glowing";
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, indicatorColor = "primary", variant = "default", ...props }, ref) => {
  const indicatorClasses = {
    default: "bg-primary",
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
    success: "bg-neon-green",
  };
  
  const variantClasses = {
    default: "",
    striped: "bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-size-[1rem_1rem] animate-flow",
    glowing: "pulse-glow",
  };

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-3 w-full overflow-hidden rounded-full bg-muted",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 transition-all",
          indicatorClasses[indicatorColor],
          variantClasses[variant]
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }


import React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface CtaButtonProps extends ButtonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  glowEffect?: boolean;
}

export function CtaButton({
  children,
  className,
  variant = "default",
  size = "default",
  startIcon,
  endIcon,
  glowEffect = false,
  ...props
}: CtaButtonProps) {
  return (
    <div className={cn("relative", glowEffect && "before:absolute before:inset-0 before:-z-10 before:blur-xl before:bg-primary/30 before:opacity-75")}>
      <Button 
        variant={variant} 
        size={size} 
        className={cn(
          "relative overflow-hidden group",
          className
        )}
        {...props}
      >
        {startIcon && (
          <span className="mr-2 transition-transform group-hover:-translate-x-1">
            {startIcon}
          </span>
        )}
        
        <span>{children}</span>
        
        {endIcon && (
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            {endIcon}
          </span>
        )}
        
        <span className="absolute -inset-[100%] block rotate-45 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 animate-shimmer"></span>
      </Button>
    </div>
  );
}

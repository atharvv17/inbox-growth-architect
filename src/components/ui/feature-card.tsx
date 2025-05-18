
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow" | "bordered" | "minimal";
  className?: string;
  children?: React.ReactNode;
}

export function FeatureCard({
  title,
  description,
  icon,
  variant = "default",
  className,
  children,
}: FeatureCardProps) {
  const variantClasses = {
    default: "bg-card/50 backdrop-blur-md border border-border/30 shadow-xl",
    glow: "bg-card/50 backdrop-blur-md border border-primary/30 shadow-xl hover:shadow-primary/10",
    bordered: "bg-card/30 backdrop-blur-sm border-2 border-primary/80 shadow-lg",
    minimal: "bg-transparent hover:bg-card/30 border border-transparent hover:border-border/30",
  };

  return (
    <div 
      className={cn(
        "rounded-xl p-6 transition-all duration-300 relative overflow-hidden group",
        variantClasses[variant],
        className
      )}
    >
      {variant === "glow" && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      )}
      
      {icon && (
        <div className="text-primary mb-4 text-3xl">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-space font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
      
      {variant === "bordered" && (
        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-t-0 border-l-0 border-r-2 border-b-2 border-primary"></div>
      )}
    </div>
  );
}

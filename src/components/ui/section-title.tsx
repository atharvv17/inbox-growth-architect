
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  titleSize?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "gradient" | "glow";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  titleSize = "lg",
  variant = "default",
  className,
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const titleSizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
  };

  const titleVariantClasses = {
    default: "text-foreground",
    gradient: "gradient-text font-bold",
    glow: "text-primary font-bold relative pulse-glow",
  };

  return (
    <div className={cn(alignmentClasses[align], "mb-8", className)}>
      <h2 className={cn(
        titleSizeClasses[titleSize],
        titleVariantClasses[variant],
        "font-space tracking-tight mb-3"
      )}>
        {title}
        {variant === "glow" && (
          <span className="absolute inset-0 blur-sm opacity-50 bg-primary/20 -z-10"></span>
        )}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

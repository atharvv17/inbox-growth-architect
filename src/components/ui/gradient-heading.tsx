
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type GradientHeadingProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  variant?: "primary" | "secondary";
  className?: string;
};

export function GradientHeading({
  children,
  size = "lg",
  variant = "primary",
  className,
}: GradientHeadingProps) {
  const sizeClasses = {
    sm: "text-lg md:text-xl",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-3xl",
    xl: "text-3xl md:text-4xl font-bold",
    xxl: "text-4xl md:text-5xl lg:text-6xl font-bold",
  };

  const gradientClasses = {
    primary: "bg-gradient-to-r from-logo-blue to-logo-darkBlue text-transparent bg-clip-text",
    secondary: "text-gray-400",
  };

  return (
    <h2
      className={cn(
        sizeClasses[size],
        gradientClasses[variant],
        "transition-colors duration-300",
        className
      )}
    >
      {children}
    </h2>
  );
}

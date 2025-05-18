
import React from "react";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  className?: string;
  variant?: "mesh" | "grid" | "glow" | "noise" | "cyber";
  animate?: boolean;
  children: React.ReactNode;
}

export function GradientBackground({
  className,
  variant = "mesh",
  animate = false,
  children,
}: GradientBackgroundProps) {
  const variantClasses = {
    mesh: "bg-gradient-to-br from-background via-muted to-background",
    grid: "cyber-grid bg-cyber-grid relative overflow-hidden",
    glow: "bg-background relative overflow-hidden",
    noise: "bg-background bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]",
    cyber: "bg-background relative overflow-hidden border-b border-primary/20",
  };

  const animationClasses = animate
    ? {
        mesh: "animate-flow bg-[length:400%_400%] bg-[0%,0%]",
        grid: "after:content-[''] after:absolute after:inset-0 after:bg-cyber-grid after:bg-cyber-grid after:animate-grid-flow",
        glow: "before:content-[''] before:absolute before:w-[200%] before:aspect-square before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-glow-conic before:animate-[spin_20s_linear_infinite] before:opacity-30 before:blur-[100px]",
        noise: "",
        cyber: "after:content-[''] after:absolute after:h-px after:left-0 after:right-0 after:bottom-0 after:bg-gradient-to-r after:from-transparent after:via-primary/50 after:to-transparent",
      }[variant]
    : "";

  return (
    <div className={cn("relative", variantClasses[variant], animationClasses, className)}>
      {children}
    </div>
  );
}

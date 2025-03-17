
import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "outline" | "secondary" | "destructive" | "success" | "primary";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  onClick?: () => void;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  onClick,
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all";
  
  const variants = {
    default: "bg-emergence-gray-100 text-emergence-gray-800",
    outline: "bg-transparent border border-emergence-gray-300 text-emergence-gray-800",
    secondary: "bg-emergence-gray-200 text-emergence-gray-800",
    destructive: "bg-red-100 text-red-800",
    success: "bg-green-100 text-green-800",
    primary: "bg-emergence-blue/10 text-emergence-blue"
  };
  
  const sizes = {
    sm: "text-xs px-2 py-0.5 space-x-1",
    md: "text-xs px-2.5 py-1 space-x-1.5",
    lg: "text-sm px-3 py-1.5 space-x-2"
  };
  
  const hoverClasses = onClick ? "cursor-pointer hover:shadow-sm" : "";
  
  return (
    <span
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        hoverClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Badge;

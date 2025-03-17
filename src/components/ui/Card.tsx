
import React from "react";
import { cn } from "@/lib/utils";
import Transition from "./Transition";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "outline" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  animation?: "fade" | "slide-up" | "scale" | "blur" | "none";
  delay?: number;
  hover?: "lift" | "glow" | "border" | "none";
  onClick?: () => void;
  threshold?: number;
};

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
  animation = "none",
  delay = 0,
  hover = "none",
  onClick,
  threshold = 0.1,
}) => {
  const baseClasses = "rounded-2xl transition-all duration-300";
  
  const variants = {
    default: "bg-white",
    glass: "backdrop-blur-md bg-white/30 border border-white/30",
    outline: "bg-transparent border border-emergence-gray-200",
    elevated: "bg-white shadow-lg"
  };
  
  const paddings = {
    none: "",
    sm: "p-3",
    md: "p-5",
    lg: "p-8"
  };
  
  const hoverEffects = {
    lift: "hover:-translate-y-1 hover:shadow-md",
    glow: "hover:shadow-lg hover:shadow-emergence-blue/10",
    border: "hover:border-emergence-blue/50",
    none: ""
  };
  
  const clickableClasses = onClick ? "cursor-pointer" : "";
  
  return (
    <Transition
      animation={animation}
      delay={delay}
      threshold={threshold}
      className={cn(
        baseClasses,
        variants[variant],
        paddings[padding],
        hoverEffects[hover],
        clickableClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </Transition>
  );
};

export default Card;

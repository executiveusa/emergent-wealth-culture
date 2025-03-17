
import React from "react";
import { cn } from "@/lib/utils";
import Transition from "./Transition";

type CardVariant = "default" | "outline" | "elevated" | "glass";
type CardPadding = "none" | "sm" | "md" | "lg";
type CardHoverEffect = "none" | "lift" | "border" | "glow";
type CardAnimation = "none" | "fade" | "slide-up" | "scale" | "blur";

export type CardProps = {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  hover?: CardHoverEffect;
  animation?: CardAnimation;
  delay?: number;
  threshold?: number;
  className?: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  padding = "md",
  hover = "none",
  animation = "none",
  delay = 0,
  threshold = 0.3,
  className = "",
  onClick,
}) => {
  const baseClasses = "rounded-2xl overflow-hidden";
  
  const variants = {
    default: "bg-white border border-emergence-gray-200",
    outline: "bg-white border border-emergence-gray-200",
    elevated: "bg-white border border-emergence-gray-200 shadow-sm",
    glass: "bg-white/60 backdrop-blur-sm border border-white/30"
  };
  
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };
  
  const hoverEffects = {
    none: "",
    lift: "transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
    border: "transition-all duration-300 hover:border-emergence-blue",
    glow: "transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
  };
  
  // If animation is 'none', render without Transition
  if (animation === "none") {
    return (
      <div
        className={cn(
          baseClasses,
          variants[variant],
          paddings[padding],
          hoverEffects[hover],
          className,
          onClick ? "cursor-pointer" : ""
        )}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
  
  // If animation is specified, wrap with Transition
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
        className
      )}
      onClick={onClick}
    >
      {children}
    </Transition>
  );
};

export default Card;

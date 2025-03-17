
import React, { useState, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TransitionProps = {
  children: ReactNode;
  show?: boolean;
  animation?: 
    | "fade" 
    | "slide-up" 
    | "slide-down" 
    | "slide-left" 
    | "slide-right"
    | "scale"
    | "blur"
    | "none";
  duration?: number;
  delay?: number;
  className?: string;
  as?: React.ElementType;
  threshold?: number;
  once?: boolean;
};

export const Transition: React.FC<TransitionProps> = ({
  children,
  show = true,
  animation = "fade",
  duration = 500,
  delay = 0,
  className = "",
  as: Component = "div",
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        if (once) setHasAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      if (!once) setHasAnimated(false);
    }
  }, [show, delay, once]);

  useEffect(() => {
    // If observing element visibility
    if (!show && threshold < 1) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && (!once || !hasAnimated)) {
            setIsVisible(true);
            setHasAnimated(true);
          } else if (!once && !entry.isIntersecting) {
            setIsVisible(false);
          }
        },
        { threshold }
      );

      const currentTarget = document.getElementById(`transition-${delay}`);
      if (currentTarget) observer.observe(currentTarget);

      return () => {
        if (currentTarget) observer.unobserve(currentTarget);
      };
    }
  }, [threshold, once, hasAnimated, delay, show]);

  const getAnimationClasses = () => {
    if (animation === "none") return "";
    
    const baseClasses = "transition-all transform";
    const durationClass = `duration-${duration}`;
    const delayClass = delay > 0 ? `delay-${delay}` : "";
    
    const transitionClasses = {
      "fade": "opacity-0",
      "slide-up": "opacity-0 translate-y-8",
      "slide-down": "opacity-0 -translate-y-8",
      "slide-left": "opacity-0 translate-x-8",
      "slide-right": "opacity-0 -translate-x-8",
      "scale": "opacity-0 scale-95",
      "blur": "opacity-0 blur-sm",
    };
    
    const animationClass = transitionClasses[animation] || "";
    
    return `${baseClasses} ${durationClass} ${delayClass} ${isVisible ? "" : animationClass}`;
  };

  return (
    <Component 
      id={`transition-${delay}`}
      className={cn(getAnimationClasses(), className)}
    >
      {children}
    </Component>
  );
};

export default Transition;

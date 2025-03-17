
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  once?: boolean;
  threshold?: number;
  animation?: "typewriter" | "fade" | "slide-up" | "word-by-word" | "letter-by-letter";
  delay?: number;
  duration?: number;
  as?: React.ElementType;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  once = true,
  threshold = 0.1,
  animation = "fade",
  delay = 0,
  duration = 500,
  as: Component = "span",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (threshold < 1) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && (!once || !hasAnimated)) {
            setTimeout(() => {
              setIsVisible(true);
              if (once) setHasAnimated(true);
            }, delay);
          } else if (!once && !entry.isIntersecting) {
            setIsVisible(false);
            if (!once) setHasAnimated(false);
          }
        },
        { threshold }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    } else {
      // If threshold is 1 or greater, show immediately after delay
      setTimeout(() => {
        setIsVisible(true);
        if (once) setHasAnimated(true);
      }, delay);
    }
  }, [threshold, once, hasAnimated, delay]);

  if (animation === "typewriter") {
    return (
      <Component
        ref={elementRef}
        className={cn(
          "inline-block overflow-hidden whitespace-nowrap border-r-2 border-emergence-blue",
          isVisible ? "animate-typing" : "w-0",
          className
        )}
        style={{
          animationDuration: `${duration}ms`,
          animationDelay: `${delay}ms`,
          animationFillMode: "forwards",
          width: isVisible ? "100%" : "0%",
          transition: `width ${duration}ms ease-in-out ${delay}ms`,
        }}
      >
        {text}
      </Component>
    );
  }

  if (animation === "word-by-word") {
    const words = text.split(" ");
    
    return (
      <Component ref={elementRef} className={cn("inline", className)}>
        {words.map((word, idx) => (
          <span
            key={`${word}-${idx}`}
            className={cn(
              "inline-block transition-all",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{
              transitionDelay: `${delay + idx * 50}ms`,
              transitionDuration: `${duration}ms`,
            }}
          >
            {word}{" "}
          </span>
        ))}
      </Component>
    );
  }

  if (animation === "letter-by-letter") {
    const letters = text.split("");
    
    return (
      <Component ref={elementRef} className={cn("inline", className)}>
        {letters.map((letter, idx) => (
          <span
            key={`${letter}-${idx}`}
            className={cn(
              "inline-block transition-all",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
            style={{
              transitionDelay: `${delay + idx * 20}ms`,
              transitionDuration: `${duration}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </Component>
    );
  }

  // Default animations (fade or slide-up)
  const animationClasses = {
    "fade": isVisible ? "opacity-100" : "opacity-0",
    "slide-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  };

  return (
    <Component
      ref={elementRef}
      className={cn(
        "inline-block transition-all",
        animationClasses[animation],
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {text}
    </Component>
  );
};

export default AnimatedText;


// This file serves as a redirect to handle case-sensitivity issues
import { 
  Card as ShadcnCard, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "./card";
import Card from "./Card";
import type { CardProps as ShadcnCardProps } from "./card"; 
import type { CardProps as CustomCardProps } from "./Card";

// Export both cards, allowing components to use either implementation
export { 
  ShadcnCard,
  Card,
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
};

// Export types from both implementations
export type { 
  ShadcnCardProps,
  CustomCardProps
};

// For backward compatibility, also export the custom Card as the default
export default Card;

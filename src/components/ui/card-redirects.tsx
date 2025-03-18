
// This file serves as a redirect to handle case-sensitivity issues
import { 
  Card as ShadcnCard, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "./card";

// Import our custom Card component
// Using a different approach to avoid case-sensitivity issues
const CustomCard = require('./Card').default;
type CustomCardProps = typeof CustomCard extends React.FC<infer P> ? P : never;

// Export both cards, allowing components to use either implementation
export { 
  ShadcnCard,
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
};

// Re-export the custom Card
export const Card = CustomCard;

// Export types from both implementations
export type { 
  CustomCardProps
};

// For backward compatibility, also export the custom Card as the default
export default CustomCard;

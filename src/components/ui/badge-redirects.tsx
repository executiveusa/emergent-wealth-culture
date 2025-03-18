
// This file serves as a redirect to handle case-sensitivity issues
import { Badge as ShadcnBadge, badgeVariants } from "./badge";
import type { BadgeProps as ShadcnBadgeProps } from "./badge";

// Import our custom Badge component
// Using a different approach to avoid case-sensitivity issues
const CustomBadge = require('./Badge').default;
type CustomBadgeProps = typeof CustomBadge extends React.FC<infer P> ? P : never;
type BadgeVariant = "default" | "outline" | "secondary" | "destructive" | "success" | "primary";
type BadgeSize = "sm" | "md" | "lg";

// Export both badges, allowing components to use either implementation
export { 
  ShadcnBadge, 
  badgeVariants 
};

// Re-export the custom Badge
export const Badge = CustomBadge;

// Export types from both implementations
export type { 
  ShadcnBadgeProps,
  CustomBadgeProps,
  BadgeVariant,
  BadgeSize 
};

// For backward compatibility, also export the custom Badge as the default
export default CustomBadge;
